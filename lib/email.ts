import nodemailer from 'nodemailer'

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const FROM = () => process.env.SMTP_FROM || 'Aviatech Consulting <noreply@aviatech.com>'
const ADMIN = () => process.env.ADMIN_EMAIL || ''

export async function sendBookingConfirmation(booking: {
  email: string
  firstName: string
  surname: string
  referenceNo: string
  category: string
  trainingPath: string
  modules: string[]
}) {
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    to: booking.email,
    subject: `Booking Confirmed – Ref ${booking.referenceNo}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#0059bb;">Application Received</h2>
        <p>Dear ${booking.firstName} ${booking.surname},</p>
        <p>Your training application has been received. Our team will review it and contact you within 24 hours.</p>
        <table style="border-collapse:collapse;width:100%;margin-top:16px;">
          <tr><td style="padding:8px;background:#f6f9ff;font-weight:bold;">Reference No.</td><td style="padding:8px;">${booking.referenceNo}</td></tr>
          <tr><td style="padding:8px;background:#f6f9ff;font-weight:bold;">Category</td><td style="padding:8px;">${booking.category}</td></tr>
          <tr><td style="padding:8px;background:#f6f9ff;font-weight:bold;">Training Path</td><td style="padding:8px;">${booking.trainingPath}</td></tr>
          <tr><td style="padding:8px;background:#f6f9ff;font-weight:bold;">Modules</td><td style="padding:8px;">${booking.modules.join(', ')}</td></tr>
        </table>
        <p style="margin-top:24px;color:#666;">— Aviatech Consulting</p>
      </div>
    `,
  })
}

export async function sendBookingNotification(booking: {
  firstName: string
  surname: string
  email: string
  referenceNo: string
  category: string
}) {
  if (!ADMIN()) return
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    to: ADMIN(),
    subject: `New Booking – ${booking.referenceNo}`,
    html: `<p>New booking from <strong>${booking.firstName} ${booking.surname}</strong> (${booking.email})<br/>Ref: <strong>${booking.referenceNo}</strong> | Category: ${booking.category}</p>`,
  })
}

export async function sendContactConfirmation(msg: { email: string; name: string; subject: string }) {
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    to: msg.email,
    subject: `We received your inquiry – ${msg.subject}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#0059bb;">Message Received</h2>
        <p>Dear ${msg.name},</p>
        <p>Thank you for reaching out. We will get back to you within 24 hours regarding: <strong>${msg.subject}</strong></p>
        <p style="margin-top:24px;color:#666;">— Aviatech Consulting</p>
      </div>
    `,
  })
}

export async function sendContactNotification(msg: {
  name: string
  email: string
  subject: string
  message: string
}) {
  if (!ADMIN()) return
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    to: ADMIN(),
    subject: `New Contact: ${msg.subject}`,
    html: `<p>From: <strong>${msg.name}</strong> (${msg.email})</p><p><strong>Subject:</strong> ${msg.subject}</p><p>${msg.message.replace(/\n/g, '<br/>')}</p>`,
  })
}
