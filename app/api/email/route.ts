import NewLead from "@/emails/lead";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: error,
    };
  }

  try {
    const sendRequest = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: "New Lead",
      html: render(NewLead(data)),
    });

    console.log(sendRequest);
  } catch (error) {
    console.log(error);
  }

  return Response.json(data);
}
