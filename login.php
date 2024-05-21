<?php
session_start();

// Dummy username and password (replace with your actual authentication logic)
$valid_username = "user";
$valid_password = "password";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate credentials
    if ($username === $valid_username && $password === $valid_password) {
        // Authentication successful
        $_SESSION["username"] = $username;
        header("Location: dashboard.php"); // Redirect to dashboard or any other page after successful login
        exit;
    } else {
        // Authentication failed
        $error_message = "Invalid username or password";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login - mental.rip</title>
    <link rel="shortcut icon" type="image/x-icon" href="assets/favicon.png">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
    <meta content="mental.rip" property="og:title" />
    <meta content="lose your mental." property="og:description" />
    <meta content="https://mental.rip/" property="og:url" />
    <meta property="og:image" content="assets/favicon.png" />
    <meta content="#C70039" data-react-helmet="true" name="theme-color" />
    <link rel="stylesheet" href="assets/login.css">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: #333;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            text-align: center;
        }

        .login-container h1 {
            margin-bottom: 20px;
        }

        .login-container label {
            display: block;
            margin: 10px 0 5px;
        }

        .login-container input {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 10px;
            border: none;
            border-radius: 4px;
        }

        .login-container button {
            padding: 10px 20px;
            border: 2px solid #C70039;
            border-radius: 25px; /* Adjust the border radius as needed */
            background-color: transparent;
            color: #C70039;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        .login-container button:hover {
            background-color: #C70039;
            color: white;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Login</button>
        </form>
        <?php
        // Display error message if authentication failed
        if (isset($error_message)) {
            echo '<p style="color: #FF5733;">' . $error_message . '</p>';
        }
        ?>
    </div>
    <script src="assets/login.js"></script>
</body>
</html>
