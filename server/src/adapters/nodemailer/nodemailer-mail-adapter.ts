import  nodemailer  from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "693ea7b59e7379",
      pass: "1c748ab7dff344"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
       await transport.sendMail({
        from: 'Equipe Widget <oi@widget.com>',
        to: 'Leo Jaime <leojaime1205@gmail.com>',
        subject,
        html: body,
    });
   };
}