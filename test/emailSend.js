const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD, USERNAME } = require("../information/emailPass");
//To send the email
const config = {
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

async function sendmail() {
  let fromSection = USERNAME + "<" + EMAIL + ">";
  console.log("msg from sendmail");
  const info = await transporter.sendMail({
    from: fromSection,
    to: "nischalshakya787@gmail.com",
    subject: "Motivation",
    text: "This is a tester mail send by using NodeJs", // plain text body
    html: `<h1>${motivationJson}</h1>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}
sendmail().then(
  () => {
    console.log("Sent successfully");
  },
  (error) => {
    console.log(error);
  }
);
