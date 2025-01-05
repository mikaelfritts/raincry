<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate input
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $iam = trim(filter_input(INPUT_POST, 'iam', FILTER_SANITIZE_STRING));
    $services = isset($_POST['service']) ? $_POST['service'] : [];
    $deadline = trim(filter_input(INPUT_POST, 'deadline', FILTER_SANITIZE_STRING));
    $budget = trim(filter_input(INPUT_POST, 'budget', FILTER_SANITIZE_STRING));
    $content = htmlspecialchars(trim(filter_input(INPUT_POST, 'wkd_content', FILTER_SANITIZE_STRING)));

    // Check for empty fields
    if (empty($name) || empty($email) || empty($content)) {
        echo 'All required fields must be filled.';
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address.';
        exit;
    }

    // Map "I am" options to labels
    $iam_map = [
        "1" => "Just starting up!",
        "2" => "A small business.",
        "3" => "An established brand.",
        "4" => "Something else entirely!",
    ];

    // Map service IDs to labels
    $service_map = [
        "1" => "A New Website",
        "2" => "Redesign of Existing Website",
        "3" => "Web Design Services",
        "4" => "Integrating New Services",
        "5" => "Print Design",
        "6" => "Branding",
        "7" => "Logo Work",
    ];

    // Map deadline IDs to labels
    $deadline_map = [
        "0" => "No deadline",
        "1" => "Now!",
        "2" => "1 Month",
        "3" => "2 Months",
        "4" => "3 Months",
        "5" => "Not Sure",
    ];

    // Map budget IDs to labels
    $budget_map = [
        "0" => "$1,000 - $3,000",
        "1" => "$3,000 - $6,000",
        "2" => "$6,000 - $12,000",
        "3" => "$12,000 - $14,000",
        "4" => "More than $14,000",
    ];

    // Translate "I am" field
    $iam_label = $iam_map[$iam] ?? "Not specified";

    // Translate service IDs into labels
    $service_list = [];
    foreach ($services as $service_id) {
        if (array_key_exists($service_id, $service_map)) {
            $service_list[] = $service_map[$service_id];
        }
    }
    $service_list_string = !empty($service_list) ? implode(", ", $service_list) : "No services selected";

    // Translate deadline and budget
    $deadline_label = $deadline_map[$deadline] ?? "Not specified";
    $budget_label = $budget_map[$budget] ?? "Not specified";

    // Prepare email details
    $to = 'info@raincry.dev'; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h2>Contact Form Details</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>I am:</strong> " . htmlspecialchars($iam_label) . "</p>
        <p><strong>Looking for:</strong> " . htmlspecialchars($service_list_string) . "</p>
        <p><strong>Deadline:</strong> " . htmlspecialchars($deadline_label) . "</p>
        <p><strong>Budget:</strong> " . htmlspecialchars($budget_label) . "</p>
        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($content)) . "</p>
    </body>
    </html>
    ";

    // Email headers
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
