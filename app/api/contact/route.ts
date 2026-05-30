import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, phone, biz, type, challenge } = await req.json()

  try {
    await resend.emails.send({
      from: 'CECA Marketing <noreply@cecamarketing.com>',
      to: 'info@cecamarketing.com',
      subject: `Nuevo lead: ${name} — ${biz}`,
      html: `
        <h2>Nuevo contacto desde cecamarketing.com</h2>
        <table>
          <tr><td><b>Nombre:</b></td><td>${name}</td></tr>
          <tr><td><b>Teléfono:</b></td><td>${phone}</td></tr>
          <tr><td><b>Email:</b></td><td>${email}</td></tr>
          <tr><td><b>Negocio:</b></td><td>${biz}</td></tr>
          <tr><td><b>Tipo:</b></td><td>${type}</td></tr>
          <tr><td><b>Desafío:</b></td><td>${challenge}</td></tr>
        </table>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}