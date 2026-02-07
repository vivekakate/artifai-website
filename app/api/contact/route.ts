import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing Gmail credentials in environment variables')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email to your inbox
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'artifaiofficial@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    })

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to ArtifAI. We've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to schedule a call with us: <a href="https://calendly.com/artifai/30min">calendly.com/artifai/30min</a></p>
        <p>Best regards,<br>ArtifAI Team</p>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
