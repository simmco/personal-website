const sgMail = require('@sendgrid/mail');

export default (req, res) => {
  const { name, email, message } = req.body;

  sgMail.setApiKey(SENDGRID_API_KEY);
  sgMail.send({
    from: email, // sender address
    to: 'm.simmelbauer@gmail.com', // list of receivers
    subject: `Nachricht von ${name} - ${email}`, // Subject line
    text: 'ERFOLG', // plain text body
    html: `<div>${message} <br /> ${name} - ${email}</div>`,
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'mail send!' }));
};
