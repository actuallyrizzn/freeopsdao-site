<?php
// Set the path for the SQLite database
$dbPath = __DIR__ . '/../db/contact_messages.db';
$logPath = __DIR__ . '/../db/contact_form_error.log';

function log_error($msg) {
    global $logPath;
    file_put_contents($logPath, date('Y-m-d H:i:s') . ' ' . $msg . "\n", FILE_APPEND);
}

// Check if db directory and file are writable
if (!is_writable(dirname($dbPath))) {
    log_error('DB directory not writable: ' . dirname($dbPath));
    header('Location: contact.html?status=error');
    exit;
}

try {
    $db = new SQLite3($dbPath);
    $db->enableExceptions(true);
    $db->exec("CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
} catch (Exception $e) {
    log_error('DB connection or table creation failed: ' . $e->getMessage());
    header('Location: contact.html?status=error');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if ($name && $email && $subject && $message && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        try {
            $stmt = $db->prepare('INSERT INTO contact_messages (name, email, message) VALUES (:name, :email, :message)');
            $stmt->bindValue(':name', $name, SQLITE3_TEXT);
            $stmt->bindValue(':email', $email, SQLITE3_TEXT);
            $stmt->bindValue(':message', $subject . "\n\n" . $message, SQLITE3_TEXT);
            if ($stmt->execute()) {
                header('Location: index.html?status=success#contact');
                exit;
            } else {
                log_error('DB insert failed for: ' . json_encode($_POST));
                header('Location: index.html?status=error#contact');
                exit;
            }
        } catch (Exception $e) {
            log_error('DB insert exception: ' . $e->getMessage() . ' | Data: ' . json_encode($_POST));
            header('Location: index.html?status=error#contact');
            exit;
        }
    } else {
        log_error('Invalid POST data: ' . json_encode($_POST));
        header('Location: index.html?status=invalid#contact');
        exit;
    }
} else {
    log_error('Invalid request method: ' . $_SERVER['REQUEST_METHOD']);
    header('Location: index.html');
    exit;
} 