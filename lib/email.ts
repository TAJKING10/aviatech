import nodemailer from 'nodemailer'

function getTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
}

const FROM = () => process.env.SMTP_FROM || 'Aviatech Consulting <info@aviatech-consulting.com>'
const ADMIN = () => process.env.ADMIN_EMAIL || ''

const baseStyle = `font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;`
const headerHtml = `
  <div style="background:#003580;padding:24px 32px;">
    <h1 style="margin:0;color:#fff;font-size:20px;letter-spacing:1px;">AVIATECH CONSULTING</h1>
    <p style="margin:4px 0 0;color:#a0c4ff;font-size:13px;">Aerospace & Aviation Excellence</p>
  </div>
`
const footerHtml = `
  <div style="background:#f5f5f5;padding:16px 32px;border-top:1px solid #e0e0e0;text-align:center;">
    <p style="margin:0;color:#999;font-size:12px;">© ${new Date().getFullYear()} Aviatech Consulting · aviatech-consulting.com</p>
    <p style="margin:4px 0 0;color:#999;font-size:12px;">info@aviatech-consulting.com</p>
  </div>
`

function row(label: string, value: string | null | undefined) {
  if (!value) return ''
  return `<tr>
    <td style="padding:8px 12px;background:#f0f4ff;font-weight:bold;color:#003580;width:40%;font-size:13px;">${label}</td>
    <td style="padding:8px 12px;font-size:13px;color:#333;">${value}</td>
  </tr>`
}

// ─── Booking: Customer Confirmation ───────────────────────────────────────────

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
    replyTo: 'info@aviatech-consulting.com',
    to: booking.email,
    subject: `Application Received – Ref ${booking.referenceNo} | Aviatech Consulting`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">Application Received</h2>
          <p style="color:#333;">Dear ${booking.firstName} ${booking.surname},</p>
          <p style="color:#333;">Thank you for submitting your training application to Aviatech Consulting. Our team will review your request and contact you within <strong>24–48 business hours</strong>.</p>

          <h3 style="color:#003580;margin-top:24px;margin-bottom:8px;">Application Summary</h3>
          <table style="border-collapse:collapse;width:100%;">
            ${row('Reference No.', booking.referenceNo)}
            ${row('Category', booking.category)}
            ${row('Training Path', booking.trainingPath)}
            ${row('Selected Modules', booking.modules.join(', '))}
          </table>

          <div style="margin-top:24px;background:#e8f0fe;border-left:4px solid #003580;padding:12px 16px;border-radius:4px;">
            <p style="margin:0;color:#003580;font-size:13px;">Please keep your reference number <strong>${booking.referenceNo}</strong> for future correspondence.</p>
          </div>

          <p style="color:#333;margin-top:24px;">If you have any questions, reply to this email or contact us at <a href="mailto:info@aviatech-consulting.com" style="color:#003580;">info@aviatech-consulting.com</a></p>
          <p style="color:#555;">Best regards,<br/><strong>Aviatech Consulting Team</strong></p>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Booking: Admin Notification ──────────────────────────────────────────────

export async function sendBookingNotification(booking: {
  firstName: string
  surname: string
  email: string
  phone: string
  referenceNo: string
  category: string
  trainingPath: string
  modules: string[]
  dateOfBirth?: string | null
  placeOfBirth?: string | null
  nationality?: string | null
  company?: string | null
  notes?: string | null
}) {
  if (!ADMIN()) return
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    replyTo: booking.email,
    to: ADMIN(),
    subject: `New Booking – ${booking.referenceNo} | ${booking.firstName} ${booking.surname}`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">New Booking Received</h2>
          <p style="color:#555;">A new training application has been submitted.</p>

          <h3 style="color:#003580;margin-top:24px;margin-bottom:8px;">Client Details</h3>
          <table style="border-collapse:collapse;width:100%;">
            ${row('Reference No.', booking.referenceNo)}
            ${row('Full Name', `${booking.firstName} ${booking.surname}`)}
            ${row('Email', booking.email)}
            ${row('Phone', booking.phone)}
            ${row('Date of Birth', booking.dateOfBirth)}
            ${row('Place of Birth', booking.placeOfBirth)}
            ${row('Nationality', booking.nationality)}
            ${row('Company / Org', booking.company)}
          </table>

          <h3 style="color:#003580;margin-top:24px;margin-bottom:8px;">Training Details</h3>
          <table style="border-collapse:collapse;width:100%;">
            ${row('Category', booking.category)}
            ${row('Training Path', booking.trainingPath)}
            ${row('Modules', booking.modules.join(', '))}
          </table>

          ${booking.notes ? `
          <h3 style="color:#003580;margin-top:24px;margin-bottom:8px;">Additional Notes</h3>
          <div style="background:#f9f9f9;padding:12px 16px;border-radius:4px;font-size:13px;color:#333;">${booking.notes.replace(/\n/g, '<br/>')}</div>
          ` : ''}

          <div style="margin-top:24px;">
            <a href="https://aviatech-consulting.com/admin" style="background:#003580;color:#fff;padding:10px 20px;text-decoration:none;border-radius:4px;font-size:13px;">View in Admin Panel</a>
          </div>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Admin Reply to Contact Message ───────────────────────────────────────────

export async function sendAdminReply(msg: {
  toEmail: string
  toName: string
  originalSubject: string
  replyText: string
}) {
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    replyTo: 'info@aviatech-consulting.com',
    to: msg.toEmail,
    subject: `Re: ${msg.originalSubject} | Aviatech Consulting`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">Response from Aviatech Consulting</h2>
          <p style="color:#333;">Dear ${msg.toName},</p>
          <p style="color:#333;">Thank you for reaching out to us. Here is our response to your inquiry:</p>

          <div style="background:#f9f9f9;border-left:4px solid #003580;padding:16px 20px;border-radius:4px;margin:24px 0;">
            <p style="margin:0;color:#333;font-size:14px;line-height:1.7;white-space:pre-wrap;">${msg.replyText.replace(/\n/g, '<br/>')}</p>
          </div>

          <p style="color:#333;">If you have any further questions, please don't hesitate to reply to this email or contact us directly at <a href="mailto:info@aviatech-consulting.com" style="color:#003580;">info@aviatech-consulting.com</a></p>
          <p style="color:#555;">Best regards,<br/><strong>Aviatech Consulting Team</strong></p>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Newsletter: Subscriber Confirmation ──────────────────────────────────────

export async function sendSubscriberConfirmation({ email }: { email: string }) {
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    replyTo: 'info@aviatech-consulting.com',
    to: email,
    subject: `You're subscribed – Aviatech Consulting Insights`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">Welcome to Aviatech Insights</h2>
          <p style="color:#333;">Thank you for subscribing to the Aviatech Consulting newsletter.</p>
          <p style="color:#333;">You'll receive our monthly briefing covering the latest in aerospace technology, regulatory compliance, operational strategy, and aviation engineering excellence — delivered directly to your inbox.</p>

          <div style="margin-top:24px;background:#e8f0fe;border-left:4px solid #003580;padding:12px 16px;border-radius:4px;">
            <p style="margin:0;color:#003580;font-size:13px;">No spam. Only high-altitude insights. You can unsubscribe at any time by replying to this email.</p>
          </div>

          <p style="color:#333;margin-top:24px;">In the meantime, explore our latest insights and case studies at <a href="https://aviatech-consulting.com/insights" style="color:#003580;">aviatech-consulting.com/insights</a></p>
          <p style="color:#555;">Best regards,<br/><strong>Aviatech Consulting Team</strong></p>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Newsletter: Admin Notification ───────────────────────────────────────────

export async function sendSubscriberNotification({ email }: { email: string }) {
  if (!ADMIN()) return
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    to: ADMIN(),
    subject: `New Subscriber – ${email}`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">New Newsletter Subscriber</h2>
          <table style="border-collapse:collapse;width:100%;">
            ${row('Email', email)}
            ${row('Subscribed At', new Date().toUTCString())}
          </table>
          <div style="margin-top:24px;">
            <a href="https://aviatech-consulting.com/admin" style="background:#003580;color:#fff;padding:10px 20px;text-decoration:none;border-radius:4px;font-size:13px;">View Admin Panel</a>
          </div>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Broadcast to one subscriber ──────────────────────────────────────────────

export async function sendBroadcastToOne({ email, subject, body }: { email: string; subject: string; body: string }) {
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    replyTo: 'info@aviatech-consulting.com',
    to: email,
    subject,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <div style="font-size:14px;color:#333;line-height:1.8;white-space:pre-wrap;">${body.replace(/\n/g, '<br/>')}</div>
          <hr style="border:none;border-top:1px solid #e0e0e0;margin:32px 0;" />
          <p style="font-size:11px;color:#999;margin:0;">You are receiving this because you subscribed to Aviatech Consulting updates.<br/>To unsubscribe, reply to this email with the subject "Unsubscribe".</p>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Contact: Customer Confirmation ───────────────────────────────────────────

export async function sendContactConfirmation(msg: { email: string; name: string; subject: string }) {
  const t = getTransporter()
  await t.sendMail({
    from: FROM(),
    replyTo: 'info@aviatech-consulting.com',
    to: msg.email,
    subject: `Message Received – ${msg.subject} | Aviatech Consulting`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">Message Received</h2>
          <p style="color:#333;">Dear ${msg.name},</p>
          <p style="color:#333;">Thank you for reaching out to Aviatech Consulting. We have received your inquiry and will respond within <strong>24–48 business hours</strong>.</p>

          <table style="border-collapse:collapse;width:100%;margin-top:16px;">
            ${row('Subject', msg.subject)}
          </table>

          <p style="color:#333;margin-top:24px;">If your inquiry is urgent, please contact us directly at <a href="mailto:info@aviatech-consulting.com" style="color:#003580;">info@aviatech-consulting.com</a></p>
          <p style="color:#555;">Best regards,<br/><strong>Aviatech Consulting Team</strong></p>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}

// ─── Contact: Admin Notification ──────────────────────────────────────────────

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
    replyTo: msg.email,
    to: ADMIN(),
    subject: `New Inquiry – ${msg.subject} | ${msg.name}`,
    html: `
      <div style="${baseStyle}">
        ${headerHtml}
        <div style="padding:32px;">
          <h2 style="color:#003580;margin-top:0;">New Contact Inquiry</h2>

          <table style="border-collapse:collapse;width:100%;margin-bottom:24px;">
            ${row('Name', msg.name)}
            ${row('Email', msg.email)}
            ${row('Subject', msg.subject)}
          </table>

          <h3 style="color:#003580;margin-bottom:8px;">Message</h3>
          <div style="background:#f9f9f9;padding:16px;border-radius:4px;font-size:13px;color:#333;line-height:1.6;">${msg.message.replace(/\n/g, '<br/>')}</div>

          <div style="margin-top:24px;">
            <a href="mailto:${msg.email}" style="background:#003580;color:#fff;padding:10px 20px;text-decoration:none;border-radius:4px;font-size:13px;">Reply to ${msg.name}</a>
          </div>
        </div>
        ${footerHtml}
      </div>
    `,
  })
}
