// Import Nodemailer
const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dreamoduceius@gmail.com', // Your email address
    pass: 'qjsgldduif123ASD!@#' // Your email password (consider using environment variables for security)
  }
});

// Email content
let mailOptions = {
  from: 'dreamoduceius@gmail.com', // Sender address
  to: 'kaiburns79@gmail.com', // Receiver address
  subject: 'Testing Nodemailer', // Subject line
  text: 'Hello from Nodemailer!', // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
