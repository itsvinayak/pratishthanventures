import nodemailer from "nodemailer";



const sendMail = async (subject: any, toEmail: any, otpText: any) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        text: otpText,
    };

    transporter.sendMail(mailOptions, function (error: any, _info) {
        if (error) {
            return false;
        } else {
            return true;
        }
    });
};


export default sendMail;