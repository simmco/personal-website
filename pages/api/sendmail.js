const sgMail = require('@sendgrid/mail');

export default (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  console.log({ name, email, message });

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
