import sendMail from "@/service/mailService";


const mailHandler = async (req: any, res: any) => {
    try {
        const { method } = req;
        switch (method) {
            case "POST": {
                let isMailSend: any = false;
                isMailSend = await sendMail(
                    req.body.subject,
                    req.body.toEmail,
                    req.body.otpText
                );

                if (!isMailSend) {
                    res.status(400).send("Email not sent");
                }
                res.status(200).send("Success");
                break;
            }
            default:
                res.setHeader("Allow", ["POST"]);
                res.status(405).end(`Method ${method} Not Allowed`);
                break;
        }
    } catch (err: any) {
        res.status(400).send("Email not sent");
    }

};

export default mailHandler;