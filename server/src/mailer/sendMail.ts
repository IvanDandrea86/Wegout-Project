"use strict";
import nodemailer from "nodemailer";
import { SMTP_PASS,SMTP_USER,SMTP_HOST } from "../constants/const";

export const sendMail=async(to:string,html:string,subject:string)=> {
    const transporter = nodemailer.createTransport({
    host:  SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
      user: SMTP_USER, 
      pass: SMTP_PASS, 
    },
  });
    let info = await transporter.sendMail({
    from: '"WeGOut.io 👻" <wegout@info.io>', // sender address
    to: to, // list of receivers
    subject: subject, //  Subject line
    html:html, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

