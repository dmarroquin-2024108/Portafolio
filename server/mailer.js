import nodemailer from 'nodemailer'
import validator from 'validator'

const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO_EMAIL']
const missingVars = requiredVars.filter((key) => !process.env[key])
const isMailerConfigured = missingVars.length === 0

let transporter = null

if (isMailerConfigured) {
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465, // true solo para el puerto 465 (SSL)
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
} else {
    console.warn(
        `[mailer] Faltan variables de entorno (${missingVars.join(
            ', '
        )}). El envío de correos está desactivado; los mensajes de contacto solo se mostrarán en consola. Revisa tu archivo .env.`
    )
}

export async function verifyMailer() {
    if (!transporter) return false
    try {
        await transporter.verify()
        console.log('[mailer] Conexión SMTP verificada correctamente.')
        return true
    } catch (err) {
        console.error('[mailer] No se pudo conectar al servidor SMTP:', err.message)
        return false
    }
}

/**
 * Envía el mensaje de contacto a tu correo (CONTACT_TO_EMAIL).
 * `name`, `email` y `message` ya deben venir validados y sanitizados.
 * Lanza un error si el envío falla, para que el caller decida cómo responder.
 */
export async function sendContactEmail({ name, email, message }) {
    if (!transporter) {
        throw new Error('El servicio de correo no está configurado (revisa tu .env).')
    }

    await transporter.sendMail({
        from: `"Formulario de portafolio" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email, 
        subject: `Nuevo mensaje de contacto — ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        html: `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Nuevo mensaje desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validator.escape(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `
    })
}

export { isMailerConfigured }