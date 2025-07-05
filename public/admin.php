<?php
session_start();

// Password for admin access
$admin_password = 'free0ps';

// Handle AJAX requests for updating contacted status and deleting messages
if (isset($_POST['action']) && !empty($_SESSION['admin_logged_in'])) {
    $dbPath = __DIR__ . '/../db/contact_messages.db';
    try {
        $db = new SQLite3($dbPath);
        $db->enableExceptions(true);
        
        // Add contacted column if it doesn't exist
        try {
            $db->exec("ALTER TABLE contact_messages ADD COLUMN contacted INTEGER DEFAULT 0");
        } catch (Exception $e) {
            // Column might already exist, ignore error
        }
        try {
            $db->exec("ALTER TABLE podcast_contact_messages ADD COLUMN contacted INTEGER DEFAULT 0");
        } catch (Exception $e) {
            // Column might already exist, ignore error
        }
        
        if ($_POST['action'] === 'update_contacted') {
            $id = (int)$_POST['id'];
            $contacted = (int)$_POST['contacted'];
            $table = $_POST['table'];
            
            $stmt = $db->prepare("UPDATE $table SET contacted = :contacted WHERE id = :id");
            $stmt->bindValue(':contacted', $contacted, SQLITE3_INTEGER);
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $stmt->execute();
            
            echo json_encode(['success' => true]);
            exit;
        } elseif ($_POST['action'] === 'delete_message') {
            $id = (int)$_POST['id'];
            $table = $_POST['table'];
            
            $stmt = $db->prepare("DELETE FROM $table WHERE id = :id");
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $stmt->execute();
            
            echo json_encode(['success' => true]);
            exit;
        }
            } catch (Exception $e) {
            error_log('Admin AJAX error: ' . $e->getMessage());
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
            exit;
        }
}

// Handle login
if (isset($_POST['password'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
    } else {
        $error = 'Incorrect password.';
    }
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

// If not logged in, show login form
if (empty($_SESSION['admin_logged_in'])): ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Login</title>
    <style>body { background: #181c24; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; } .login-box { background: #232b3a; padding: 2em; border-radius: 8px; box-shadow: 0 2px 8px #0003; } input { padding: 0.5em; border-radius: 4px; border: none; margin-top: 1em; width: 100%; } button { margin-top: 1em; padding: 0.5em 1em; border: none; border-radius: 4px; background: #2ecc40; color: #fff; font-weight: bold; cursor: pointer; } .error { color: #ff4d4d; margin-top: 1em; }</style>
</head>
<body>
    <div class="login-box">
        <h2>Admin Login</h2>
        <form method="POST">
            <input type="password" name="password" placeholder="Password" required autofocus>
            <button type="submit">Login</button>
        </form>
        <?php if (!empty($error)) echo '<div class="error">' . htmlspecialchars($error) . '</div>'; ?>
    </div>
</body>
</html>
<?php exit; endif;

// If logged in, show messages
$dbPath = __DIR__ . '/../db/contact_messages.db';
$table = 'contact_messages';
$view = $_GET['view'] ?? 'main';
if ($view === 'podcast') {
    $table = 'podcast_contact_messages';
}
try {
    $db = new SQLite3($dbPath);
    $db->enableExceptions(true);
    
    // Add contacted column if it doesn't exist
    try {
        $db->exec("ALTER TABLE contact_messages ADD COLUMN contacted INTEGER DEFAULT 0");
    } catch (Exception $e) {
        // Column might already exist, ignore error
    }
    try {
        $db->exec("ALTER TABLE podcast_contact_messages ADD COLUMN contacted INTEGER DEFAULT 0");
    } catch (Exception $e) {
        // Column might already exist, ignore error
    }
    
    // Check if table exists
    $tableCheck = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name='" . $table . "'");
    if ($tableCheck->fetchArray()) {
        $result = $db->query("SELECT * FROM $table ORDER BY submitted_at DESC");
        $messages = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $messages[] = $row;
        }
    } else {
        $messages = [];
    }
} catch (Exception $e) {
    error_log('Admin database error: ' . $e->getMessage());
    die('Database error: ' . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form Responses</title>
    <style>
        body { background: #181c24; color: #fff; font-family: sans-serif; padding: 2em; }
        table { width: 100%; border-collapse: collapse; margin-top: 2em; }
        th, td { border: 1px solid #333; padding: 0.5em; }
        th { background: #232b3a; }
        tr:nth-child(even) { background: #232b3a; }
        tr.contacted { background: #1a3a1a !important; }
        .logout { float: right; color: #fff; text-decoration: none; background: #ff4d4d; padding: 0.3em 0.8em; border-radius: 4px; margin-bottom: 1em; }
        .logout:hover { background: #ff1a1a; }
        .tabs { margin-bottom: 2em; }
        .tab-link { color: #fff; text-decoration: none; background: #232b3a; padding: 0.5em 1.5em; border-radius: 4px 4px 0 0; margin-right: 1em; font-weight: bold; border: 1px solid #333; border-bottom: none; }
        .tab-link.active, .tab-link:hover { background: #2ecc40; color: #181c24; }
        .contacted-checkbox { width: 20px; height: 20px; cursor: pointer; }
        .delete-btn { background: #ff4d4d; color: #fff; border: none; padding: 0.3em 0.6em; border-radius: 4px; cursor: pointer; font-size: 0.8em; }
        .delete-btn:hover { background: #ff1a1a; }
        .actions { display: flex; gap: 0.5em; }
        .message-cell { max-width: 300px; word-wrap: break-word; }
    </style>
</head>
<body>
    <a href="?logout=1" class="logout">Logout</a>
    <h1>Contact Form Responses</h1>
    <div class="tabs">
        <a href="?view=main" class="tab-link<?= $view === 'main' ? ' active' : '' ?>">Main Site Contacts</a>
        <a href="?view=podcast" class="tab-link<?= $view === 'podcast' ? ' active' : '' ?>">Podcast PR Contacts</a>
    </div>
    <?php if (empty($messages)): ?>
        <p>No messages found.</p>
    <?php else: ?>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Submitted At</th>
            <th>Contacted</th>
            <th>Actions</th>
        </tr>
        <?php foreach ($messages as $msg): ?>
        <tr class="<?= $msg['contacted'] ? 'contacted' : '' ?>" data-id="<?= $msg['id'] ?>">
            <td><?= htmlspecialchars($msg['id']) ?></td>
            <td><?= htmlspecialchars($msg['name']) ?></td>
            <td><?= htmlspecialchars($msg['email']) ?></td>
            <td class="message-cell"><?= nl2br(htmlspecialchars($msg['message'])) ?></td>
            <td><?= htmlspecialchars($msg['submitted_at']) ?></td>
            <td>
                <input type="checkbox" class="contacted-checkbox" 
                       <?= $msg['contacted'] ? 'checked' : '' ?> 
                       onchange="updateContacted(<?= $msg['id'] ?>, this.checked, '<?= $table ?>')">
            </td>
            <td class="actions">
                <button class="delete-btn" onclick="deleteMessage(<?= $msg['id'] ?>, '<?= $table ?>')">Delete</button>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>
    <?php endif; ?>

    <script>
        function updateContacted(id, contacted, table) {
            fetch('admin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `action=update_contacted&id=${id}&contacted=${contacted ? 1 : 0}&table=${table}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const row = document.querySelector(`tr[data-id="${id}"]`);
                    if (contacted) {
                        row.classList.add('contacted');
                    } else {
                        row.classList.remove('contacted');
                    }
                } else {
                    alert('Error updating contacted status');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error updating contacted status');
            });
        }

        function deleteMessage(id, table) {
            if (confirm('Are you sure you want to delete this message?')) {
                fetch('admin.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `action=delete_message&id=${id}&table=${table}`
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        const row = document.querySelector(`tr[data-id="${id}"]`);
                        row.remove();
                    } else {
                        alert('Error deleting message');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error deleting message');
                });
            }
        }
    </script>
</body>
</html> 