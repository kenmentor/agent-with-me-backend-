const suceesEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signup Successful</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { background-color: #f5f8fa; font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; }
    .email-container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0,0,0,0.05);
      text-align: center;
    }
    .checkmark {
      font-size: 60px;
      color: #28a745;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 26px;
      color: #28a745;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      color: #333;
      line-height: 1.6;
    }
    .btn {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 30px;
      background-color: #28a745;
      color: white;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
    }
    .footer {
      margin-top: 30px;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="checkmark">✔</div>
    <h1>Signup Successful!</h1>
    <p>Hi [User's Name],</p>
    <p>Your account has been successfully created and you're all set to start using <strong>Jotter</strong>.</p>
    <p>Click the button below to log in and start writing!</p>
    <a href="https://jotterapp.com/login" class="btn">Log In to Your Account</a>
    <div class="footer">
      &copy; 2025 Jotter. All rights reserved.
    </div>
  </div>
</body>
</html>
`
const forgetPasswordEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Password Reset</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { background-color: #f4f4f4; font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; }
    .email-wrapper { max-width: 600px; background: #fff; margin: auto; padding: 40px; border-radius: 8px; }
    h2 { color: #d9534f; text-align: center; }
    p { font-size: 16px; line-height: 1.6; color: #333; }
    .btn {
      display: inline-block;
      background: #d9534f;
      color: #fff;
      padding: 12px 24px;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;
      font-weight: bold;
    }
    .footer { font-size: 12px; text-align: center; color: #888; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <h2>Reset Your Password</h2>
    <p>Hi [User's Name],</p>
    <p>We received a request to reset your password. Click the button below to set a new one:</p>
    <a href="https://jotterapp.com/reset-password?token=123456" class="btn">Reset Password</a>
    <p>If you didn’t request this, you can ignore this email.</p>
    <div class="footer">&copy; 2025 Jotter. All rights reserved.</div>
  </div>
</body>
</html>
`
const verificationEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Verification Code</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { background: #f4f4f4; font-family: 'Segoe UI', sans-serif; }
    .container { max-width: 600px; background: #fff; margin: auto; padding: 40px; border-radius: 8px; }
    h2 { color: #0a75c2; text-align: center; }
    p { font-size: 16px; color: #333; line-height: 1.6; }
    .code-box {
      text-align: center;
      background: #e6f2ff;
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #0a75c2;
      border: 2px dashed #0a75c2;
      margin: 30px 0;
      border-radius: 5px;
    }
    .footer { font-size: 12px; text-align: center; color: #888; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>Email Verification Code</h2>
    <p>Hi [User's Name],</p>
    <p>Use the code below to verify your email address:</p>
    <div class="code-box">[verificationcode]</div>
    <p>This code will expire in 10 minutes.</p>
    <div class="footer">&copy; 2025 Jotter. All rights reserved.</div>
  </div>
</body>
</html>
`
const welcomeEmail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Jotter!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { background-color: #f9f9f9; font-family: 'Segoe UI', sans-serif; padding: 0; margin: 0; }
    .email-container { max-width: 600px; margin: auto; background: #fff; padding: 40px; border-radius: 8px; }
    h1 { color: #0a75c2; text-align: center; }
    p { font-size: 16px; line-height: 1.6; color: #333; }
    .btn { display: inline-block; background: #0a75c2; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; }
    .footer { font-size: 12px; text-align: center; color: #888; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="email-container">
    <h1>Welcome to Jotter 🎉</h1>
    <p>Hi [User's Name],</p>
    <p>Thank you for signing up for <strong>Jotter</strong>! We’re thrilled to have you on board.</p>
    <p>You can now start creating and organizing your notes effortlessly.</p>
    <p><a href="https://jotterapp.com/dashboard" class="btn">Go to Dashboard</a></p>
    <div class="footer">&copy; 2025 Jotter. All rights reserved.</div>
  </div>
</body>
</html>
r`



// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Notification from Jotter</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <style>
//     body { background: #f0f0f0; font-family: 'Segoe UI', sans-serif; margin: 0; padding: 0; }
//     .email-box { max-width: 600px; background: #fff; padding: 40px; margin: auto; border-radius: 8px; }
//     h2 { color: #333; }
//     p { font-size: 16px; line-height: 1.6; color: #444; }
//     .footer { font-size: 12px; color: #888; text-align: center; margin-top: 30px; }
//   </style>
// </head>
// <body>
//   <div class="email-box">
//     <h2>Hello [User's Name]</h2>
//     <p>This is a notification from <strong>Jotter</strong>.</p>
//     <p>[Your custom message goes here.]</p>
//     <div class="footer">&copy; 2025 Jotter. All rights reserved.</div>
//   </div>
// </body>
// </html>

module.exports = {
  sucessEmail: suceesEmail,
  forgetPasswordEmail: forgetPasswordEmail,
  verificationEmail: verificationEmail,
  welcomeEmail: welcomeEmail
}