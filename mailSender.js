/**
 * E / 18 / 173
 * Kasthuripitiya K.A.I.M.
 * Automated Mail Sender
 * 11/08/2022
 */

// Importing the required modules
import { scheduleJob } from "node-schedule";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv"; //Read the .env file
dotenv.config({ path: ".env.auth" }); //Read the .env file

// Mail sending Function

const sendEmail = async (options) => {
  //All the security_configs are in a seperate file for security purposes
  // If the user tried to access unknown property this won't be executed
  if (options.recipients !== undefined && options.content !== undefined) {
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
      from: `${
        options.sender !== undefined ? options.sender : "Unknwon Sender"
      } ${process.env.EMAIL_USERNAME}`,

      // Comma Separated list of mails
      bcc: options.recipients,

      // reply-to field
      replyTo: `do not reply to this email ${process.env.EMAIL_USERNAME}`,

      // send the list as bcc or cc
      // bcc: secure_configuration.EMAIL_LIST_BCC,
      // cc: secure_configuration.EMAIL_LIST_CC,

      // Subject of Email
      subject: options.subject,

      // This would be the text of email body
      text: options.content,
      // html: `<h2>${details[options.property].message}</h2>`,

      // attachments: [
      //   {
      //     filename: "test.txt",
      //     content: "Hello, Mail For Testing",
      //   },
      // ],
    };

    // Schedule the mail sending
    if (options.scheduledDate !== undefined) {
      await scheduleJob(new Date(options.scheduledDate), () => {
        // verify connection configuration
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");

            // Send Mail to the given list of mails , if sending fails log it to the console
            transporter.sendMail(mailConfigurations, (err, info) => {
              if (err) throw err;
              console.log("email Sent Successfully");
              console.log(info);
            });
          }
        });
      });
    } else {
      // If the scheduled date is not provided
      console.log(`Please Provide a date and time to start sending emails!!`);
    }
  } else {
    console.error(`recipients list and email content cannot be empty!!`);
  }
};

export default sendEmail;
