const nodemailer = require("nodemailer");
const cron = require("node-cron");
const htmlGen = require("./htmlGenerator");
const { EMAIL, PASSWORD, USERNAME } = require("./information/emailPass");
const { API_KEY } = require("./information/APIKEY");

let motivationalQuote;
const header = {
  "X-Api-Key": API_KEY,
};

//Fetching API
const main = () => {
  const motivation = fetch(
    "https://api.api-ninjas.com/v1/quotes?category=inspirational",
    {
      headers: header,
    }
  );
  motivation
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      response.forEach((element) => {
        motivationalQuote = element.quote;
      });
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
        const html = htmlGen({
          intro: "Hello Yujala, Hope you are doing well.❤️",
          second_line: `Here is your Motivation of the day: <br><br><b>${motivationalQuote}</b>`,
          outro:
            "Stay motivated and make today great!<br>Sending Lots of Love, Nischal Shakya",
        });

        const info = await transporter.sendMail({
          from: fromSection,
          to: "shakyayujala@gmail.com,nischalshakya787@gmail.com",
          subject: "Motivation",
          html: html,
          text: motivationalQuote,
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
    })
    .catch((error) => {
      console.log("Error Fetching the Motivational Quote" + error);
    });
};

cron.schedule("0 9 * * *", main);
