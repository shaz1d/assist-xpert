import NewLead from "@/emails/lead";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
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
    return NextResponse.json({ status: 500, message: "SMTP not verified" });
  }

  try {
    const sendRequest = await transporter.sendMail({
      from: SMTP_EMAIL,
      to: "shazzadulislam998@gmail.com",
      subject: "New Lead",
      html: render(NewLead(data)),
    });

    console.log(sendRequest);
    return NextResponse.json({ message: "Form Submitted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "There was some Error" });
  }
}
