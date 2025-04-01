'use server'

// src : https://dev.to/sheraz4194/sending-emails-in-nextjs-via-nodemailer-4ai2

import nodemailer from 'nodemailer'

const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER

const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: false,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
})

export async function sendMail({
    subject,
    text,
    html,
}: {
    email: string
    sendTo?: string
    subject: string
    text: string
    html?: string
}) {
    try {
        await transporter.verify()
    } catch (error) {
        console.error(
            'Something Went Wrong',
            SMTP_SERVER_USERNAME,
            SMTP_SERVER_PASSWORD,
            error
        )
        return
    }

    const info = await transporter.sendMail({
        from: SITE_MAIL_RECIEVER,
        to: SITE_MAIL_RECIEVER,
        subject: subject,
        text: text,
        html: html ? html : '',
    })
    return info
}
