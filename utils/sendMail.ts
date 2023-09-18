require("dotenv").config();
import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path";

interface EmailOptions {
  email: string;
  subject: string;
  template: string;
  data: { [key: string]: any };
}

const sendmail = async (options: EmailOptions): Promise<void> => {
  console.log("sendmail");
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMPT_PORT || "587"),
    service: process.env.SMPT_SERVICE,
    auth: {
      user: "chiragmunjal71@gmail.com",
      pass: "oocaisgjdwgfeqws",
    },
  });

  const { email, subject, template, data } = options;

  //get the path to email template file

  const templatePath = path.join(__dirname, "../mails", template);

  //render the email template with ejs
  const html: string = await ejs.renderFile(templatePath, data);

  const mailoptions = {
    from: "chiragmunjal71@gmail.com",
    to: email,
    subject,
    html,
  };
  try {
    await transporter.sendMail(mailoptions);
  } catch (error: any) {
    console.log(error);
  }
};

export default sendmail;
