import { MailSender } from "./mailSender.js";
import moment from "moment";

// Give the mail addresses as strings seperated by commas
let emailList = ["ishanmaduranga271@gmail.com", "e18173@eng.pdn.ac.lk"];

// Task 01
// Send email after 10 seconds
const regDate = moment().add(10, "s").format();
new MailSender(emailList, regDate, "notify").sendEmail();

// Task 02
// Send emails after 10 seconds for a empty list
new MailSender([], regDate, "admin").sendEmail();

// Task 03
// Send emails after 20
const newRegDate = moment(regDate).add(10, "s").format();
new MailSender(["ishanmaduranga271@gmail.com"], newRegDate, "abc").sendEmail();
