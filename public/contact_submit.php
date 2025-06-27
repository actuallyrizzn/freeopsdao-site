<?php
// Set the path for the SQLite database
$dbPath = __DIR__ . '/../db/contact_messages.sqlite';

// Create/connect to the SQLite database
try {
    $db = new PDO('sqlite:' . $dbPath);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Create table if it doesn't exist
    $db->exec("CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");
} catch (PDOException $e) {
    die('Database connection failed: ' . $e->getMessage());
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Basic validation
    if ($name && $email && $message && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $stmt = $db->prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
        if ($stmt->execute([$name, $email, $message])) {
            echo '<div style="color:green;">Thank you! Your message has been received.</div>';
        } else {
            echo '<div style="color:red;">There was an error saving your message. Please try again later.</div>';
        }
    } else {
        echo '<div style="color:red;">Please fill in all fields with a valid email address.</div>';
    }
} else {
    echo '<div style="color:red;">Invalid request.</div>';
} 