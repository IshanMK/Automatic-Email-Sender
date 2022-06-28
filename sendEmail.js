import { MailSender } from "./mailSender.js";
import moment from "moment";

// Give the mail addresses as strings seperated by commas
let emailList = ["example@example.com", "gmail@gmail.com"];

// Task 01
// Send email after 10 seconds
const regDate = moment("2022-06-28T18:16:45+05:30").add(10, "s").format();
new MailSender(emailList, regDate).sendEmail();
