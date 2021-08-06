const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "amit@rapidinnovation.dev",
//   from: "amit@rapidinnovation.dev",
//   subject: "This is my first creation!",
//   text: "I hope this one actually get to you.",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amit@rapidinnovation.dev",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you liked the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "amit@rapidinnovation.dev",
    subject: "Sorry to see you go!",
    text: `Goodbye , ${name}. We hope to see you soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
