const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

// Initialize Mailgen
const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Motivation Daily",
    link: "https://yourmotivationwebsite.com/",
    logo: "https://yourmotivationwebsite.com/logo.png",
  },
});

// Define the email template
const motivationalQuote = "Your inspirational quote goes here.";
const email = {
  body: {
    name: "Motivation Seeker",
    intro: "Here is your daily dose of motivation:",
    quote: motivationalQuote,
    outro: "Stay motivated and make today great!",
  },
};

// Generate the email template
const emailTemplate = mailGenerator.generate(email);

// Generate the plaintext version of the email
const emailPlainText = mailGenerator.generatePlaintext(email);

// Create a transporter for sending emails (configure it with your email service
console.log(emailTemplate);
