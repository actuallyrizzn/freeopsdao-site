<?php
session_start();

// Password for admin access
$admin_password = 'free0ps';

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
try {
    $db = new SQLite3($dbPath);
    $db->enableExceptions(true);
    
    // Check if table exists
    $tableCheck = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name='contact_messages'");
    if ($tableCheck->fetchArray()) {
        $result = $db->query('SELECT * FROM contact_messages ORDER BY submitted_at DESC');
        $messages = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $messages[] = $row;
        }
    } else {
        // Check if there's a 'messages' table (old schema)
        $oldTableCheck = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name='messages'");
        if ($oldTableCheck->fetchArray()) {
            $result = $db->query('SELECT * FROM messages ORDER BY submitted_at DESC');
            $messages = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $messages[] = $row;
            }
        } else {
            $messages = [];
        }
    }
} catch (Exception $e) {
    die('Database error: ' . $e->getMessage());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Form Responses</title>
    <style>body { background: #181c24; color: #fff; font-family: sans-serif; padding: 2em; } table { width: 100%; border-collapse: collapse; margin-top: 2em; } th, td { border: 1px solid #333; padding: 0.5em; } th { background: #232b3a; } tr:nth-child(even) { background: #232b3a; } .logout { float: right; color: #fff; text-decoration: none; background: #ff4d4d; padding: 0.3em 0.8em; border-radius: 4px; margin-bottom: 1em; } .logout:hover { background: #ff1a1a; }</style>
</head>
<body>
    <a href="?logout=1" class="logout">Logout</a>
    <h1>Contact Form Responses</h1>
    <?php if (empty($messages)): ?>
        <p>No messages found.</p>
    <?php else: ?>
    <table>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Submitted At</th></tr>
        <?php foreach ($messages as $msg): ?>
        <tr>
            <td><?= htmlspecialchars($msg['id']) ?></td>
            <td><?= htmlspecialchars($msg['name']) ?></td>
            <td><?= htmlspecialchars($msg['email']) ?></td>
            <td><?= nl2br(htmlspecialchars($msg['message'])) ?></td>
            <td><?= htmlspecialchars($msg['submitted_at']) ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    <?php endif; ?>
</body>
</html> 