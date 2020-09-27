const sgMail = require('@sendgrid/mail');

export default (req, res) => {
  const body = JSON.parse(req.body);
  const { name, email, message } = body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  return sgMail
    .send({
      from: email, // sender address
      to: 'm.simmelbauer@gmail.com', // list of receivers
      subject: `Nachricht von ${name} - ${email}`, // Subject line
      text: 'ERFOLG', // plain text body
      html: `<div>${message} <br /> ${name} - ${email}</div>`,
    })
    .then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'mail send!' }));
    })
    .catch((err) => {
      console.log({ err });
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'mail error!' }));
    });
};
