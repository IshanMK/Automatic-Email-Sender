import sendEmail from "./mailSender.js";
import moment from "moment";

// Give the mail addresses as strings seperated by commas
let emailList = ["ishanmaduranga271@gmail.com", "e18173@eng.pdn.ac.lk"];

// Task 01

try {
  await sendEmail({
    emailList,
    scheduledDate: moment().add(5, "s").format(),
    sender: "Administrator",
    property: "notify",
  });
} catch (err) {
  console.log(err);
}
