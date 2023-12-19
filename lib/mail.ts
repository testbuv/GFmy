import nodemailer, { TransportOptions, SendMailOptions, SentMessageInfo } from "nodemailer";

const hostOptions = {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(
    hostOptions as TransportOptions
);

async function sendMail(mailOptions: SendMailOptions): Promise<SentMessageInfo> {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(info);
            }
        });
    });
}

export { sendMail };