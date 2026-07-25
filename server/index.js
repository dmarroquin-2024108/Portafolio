import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import validator from 'validator'
import { sendContactEmail } from './mailer.js'

const app = express()
const PORT = process.env.PORT || 4000

// Origen(es) permitido(s) para CORS. En producción define ALLOWED_ORIGIN
// en tu .env (ej: https://tu-portafolio.com). Nunca dejes CORS abierto a "*" en un endpoint que recibe datos de usuarios.
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGIN || 'http://localhost:5173').split(',')

app.use(helmet())
app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || ALLOWED_ORIGINS.includes(origin)) {
                return callback(null, true)
            }
            return callback(new Error('Origen no permitido por CORS'))
        }
    })
)
app.use(express.json({ limit: '10kb' }))

// Limita cuántas veces puede escribir la misma IP al formulario de contacto,
// para frenar bots y ataques de flood/spam.
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // máximo 5 envíos por IP en la ventana
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Demasiados intentos. Intenta de nuevo en unos minutos.' }
})

function sanitizeText(value) {
    // quita tags HTML/script y espacios sobrantes para evitar inyección
    return validator.escape(validator.stripLow(String(value).trim()))
}

app.post('/api/contact', contactLimiter, async (req, res) => {
    const { name, email, message, company } = req.body || {}

    // Honeypot: campo oculto que solo un bot llenaría (ver Contact.jsx).
    // Si viene con valor, respondemos 200 "falso" sin procesar nada,
    // para no delatarle al bot que fue detectado.
    if (company) {
        return res.status(200).json({ ok: true })
    }

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Faltan campos: nombre, email y mensaje son requeridos.' })
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
        return res.status(400).json({ error: 'Formato de datos inválido.' })
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'El email no tiene un formato válido.' })
    }

    if (name.trim().length < 2 || name.trim().length > 80) {
        return res.status(400).json({ error: 'El nombre debe tener entre 2 y 80 caracteres.' })
    }

    if (message.trim().length < 10 || message.trim().length > 2000) {
        return res.status(400).json({ error: 'El mensaje debe tener entre 10 y 2000 caracteres.' })
    }

    const safeData = {
        name: sanitizeText(name),
        email: validator.normalizeEmail(email),
        message: sanitizeText(message)
    }

    // Aquí es donde conectarías un servicio real de correo, por ejemplo
    // Nodemailer, Resend, SendGrid, o guardarías el mensaje en una base de datos.
    // Los datos ya llegan validados y sanitizados a este punto.
    console.log('Nuevo mensaje de contacto:', safeData)

    try {
        await sendContactEmail(safeData)
    } catch (err) {
        console.error('[contact] Error al enviar el correo:', err.message)
        return res.status(500).json({ error: 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.' })
    }
    
    return res.status(200).json({ ok: true })
})

app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' })
})

// Manejador de errores centralizado (incluye errores de CORS)
app.use((err, _req, res, _next) => {
    console.error(err.message)
    res.status(err.status || 500).json({ error: 'Ocurrió un error en el servidor.' })
})

app.listen(PORT, () => {
    console.log(`Servidor de contacto corriendo en http://localhost:${PORT}`)
})