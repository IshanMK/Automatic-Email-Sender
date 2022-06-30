/**
 * E / 18 / 173
 * Kasthuripitiya K.A.I.M.
 * Automated Mail Sender
 * 29/06/2022
 */

import moment from "moment";
import details from "./structure.js";
import { scheduleJob } from "node-schedule";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv"; //Read the .env file
dotenv.config({ path: ".env.auth" }); //Read the .env file

class MailSender {
  // Constructor to set the email list
  constructor(emailList, regDate, property) {
    this.emailList = emailList;
    this.regDate = regDate;
    this.property = property;
  }

  // Mail sending Function

  async sendEmail() {
    // console.log(moment().format("HH:mm:ss"));

    //All the security_configs are in a seperate file for security purposes
    // If the user tried to access unknown property this won't be executed
    if (details[this.property] !== undefined) {
      const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.HOSTPORT,
        secure: false,
        service: process.env.SERVICE,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.PASSWORD,
        },
      });

      const mailConfigurations = {
        // It should be a string of sender email
        from: `Ishan Maduranga ${process.env.EMAIL_USERNAME}`,

        // Comma Separated list of mails
        bcc: this.emailList,

        // reply-to field
        replyTo: `do not reply to this email ${process.env.EMAIL_USERNAME}`,

        // send the list as bcc or cc
        // bcc: secure_configuration.EMAIL_LIST_BCC,
        // cc: secure_configuration.EMAIL_LIST_CC,

        // Subject of Email
        subject: "Sending Email using Node.js",

        // This would be the text of email body
        text: details[this.property],

        attachments: [
          {
            filename: "test.txt",
            content: "Hello, Mail For Testing",
          },
        ],
      };

      await scheduleJob(new Date(this.regDate), () => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");

            if (mailConfigurations.bcc.length !== 0) {
              //
              console.log("Email list is not empty!");

              // Send Mail to the given list of mails , if sending fails log it to the console
              transporter.sendMail(mailConfigurations, (err, info) => {
                if (err) throw err;
                console.log("Email Sent Successfully");
                console.log(info);
              });
            } else {
              console.log("Email list empty");
              return;
            }
          }
        });
      });
    } else {
      console.log(`Unknown Property Accessed!!`);
    }
  }
}

export { MailSender };
