<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate input
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $message = htmlspecialchars(trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING)));

    // Check for empty fields
    if (empty($name) || empty($email) || empty($message)) {
        echo 'All fields are required.';
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address.';
        exit;
    }

    // Prepare email details
    $to = 'hello@raincry.dev'; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = nl2br(
        "You have received a new message from the contact form:\n\n" .
        "Name: " . htmlspecialchars($name) . "\n" .
        "Email: " . htmlspecialchars($email) . "\n\n" .
        "Message:\n" . htmlspecialchars($message) . "\n"
    );

    // Set email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply@raincry.dev\r\n"; // Use a fixed email address
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        header("Location: success.html"); // Redirect to success page
        exit;
    } else {
        echo 'Failed to send the message. Please try again later.';
    }
} else {
    echo 'Invalid request method.';
}
?>
