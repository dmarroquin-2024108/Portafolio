import danielPhoto from '../assets/Yo.png'
import ChapinLogo from '../assets/ChapinBank.jpeg'
import loginC from '../assets/loginC.jpeg'
import cuentas from '../assets/cuentas.jpeg'
import deposito from '../assets/deposito.jpeg'
import productos from '../assets/productos.jpeg'
import resumen from '../assets/resumen.jpeg'     
import DebuggersLogo from '../assets/DebuggersEats.jpeg'
import loginD from '../assets/loginD.jpeg'
import menu from '../assets/menuA.jpeg'
import panel from '../assets/panelA.jpeg'
import reporte from '../assets/reporte.jpeg'
import users from '../assets/users.jpeg'
import FeelWell from '../assets/FeelWell.jpeg'
import loginF from '../assets/loginF.jpeg'
import ejercicios from '../assets/ejercicios.jpeg'
import menuU from '../assets/menuU.jpeg'
import retos from '../assets/retos.jpeg'
import tiyu from '../assets/tiyu.jpeg'
import CV from '../assets/CV-Daniel-Marroquin-Zabala.pdf'

export const profile = {
    brand: 'Daniel Marroquín',
    name: 'Daniel Marroquín',
    role: {
        es: 'Desarrollador Web & Backend Junior',
        en: 'Junior Web & Backend Developer'
    },
    location: {
        es: 'Ciudad de Guatemala, Guatemala',
        en: 'Guatemala City, Guatemala'
    },
    age: {
        es: '18 años',
        en: '18 years old'
    },
    yearsDeveloping: '4+',
    formation: {
        es: 'Perito en Informática',
        en: 'IT Technician (Perito en Informática)'
    },
    available: true,
    photo: danielPhoto,
    tagline: {
        es: 'Haz lo que debes y está en lo que haces." — San Josemaría Escrivá',
        en: '"Do what you must, and be in what you do." — San Josemaría Escrivá'
    },
    summary: {
        es: 'Desarrollador Full Stack en formación, con interés en el desarrollo de aplicaciones web y la creación de interfaces intuitivas junto con APIs robustas. Enfocado en escribir código limpio, aplicar buenas prácticas de desarrollo y fortalecer continuamente mis habilidades técnicas para construir soluciones eficientes y mantenibles.',
        en: 'Full Stack developer in training, interested in building web applications and crafting intuitive interfaces backed by robust APIs. Focused on writing clean code, applying good development practices, and continuously strengthening my technical skills to build efficient, maintainable solutions.'
    },
    email: 'mzabaladalejandro@gmail.com',
    cvUrl: CV,
    social: {
        github: 'https://github.com/dmarroquin-2024108',
        linkedin: 'https://www.linkedin.com/in/daniel-marroquin-680221425',
        computrabajo: 'https://www.computrabajo.com.gt/Daniel-Alejandro-Marroquín-Zabala'
    }
}

export const education = [
    {
        degree: {
            es: 'Educación Nivel Primaria - Básicos',
            en: 'Primary & Middle School Education'
        },
        school: 'Liceo Católico Santa Isabel',
        period: '2015 — 2023',
        description: {
            es: 'Enfoque en la formación académica, ética y humana, fundamentada en valores y responsabilidad.',
            en: 'Focus on academic, ethical and human formation, grounded in values and responsibility.'
        }
    },
    {
        degree: {
            es: 'Perito en Informática',
            en: 'IT Technician (Perito en Informática)'
        },
        school: 'Centro Educativo Técnico Laboral Kinal',
        period: '2024 - Actualidad',
        description: {
            es: 'Enfoque en desarrollo de software, estructuras de datos, bases de datos y arquitectura de sistemas.',
            en: 'Focus on software development, data structures, databases and systems architecture.'
        }
    }
]

// level: 0-100, usado en la gráfica radar de habilidades
export const skills = [
    { name: 'React', level: 80, category: { es: 'Frontend', en: 'Frontend' } },
    { name: 'Node.js ', level: 75, category: { es: 'Backend', en: 'Backend' } },
    { name: 'JavaScript', level: 77, category: { es: 'Lenguaje', en: 'Language' } },
    { name: 'Java', level: 75, category: { es: 'Lenguaje', en: 'Language' } },
    { name: 'C#', level: 70, category: { es: 'Lenguaje', en: 'Language' } },
    { name: 'MongoDB', level: 78, category: { es: 'Base de datos', en: 'Database' } },
    { name: 'SQL', level: 75, category: { es: 'Base de datos', en: 'Database' } },
    { name: 'Tailwind CSS', level: 86, category: { es: 'Estilos', en: 'Styling' } },
    { name: 'Docker', level: 65, category: { es: 'DevOps', en: 'DevOps' } },
    { name: 'React Native', level: 70, category: { es: 'Mobile', en: 'Mobile' } },
    { name: 'Git / GitHub', level: 85, category: { es: 'Control de versiones', en: 'Version control' } }
]

// showcase: solo proyectos con interfaz gráfica, para el carrusel visual
export const showcaseProjects = [
    { name: 'Chapin Bank', image: ChapinLogo },
    { name: 'Debuggers Eats', image: DebuggersLogo },
    { name: 'FeelWell', image: FeelWell }
]

export const projects = [
    {
        name: 'Chapin Bank',
        category: { es: 'App Web', en: 'Web App' },
        description: {
            es: 'Sistema bancario web enfocado en la gestión de cuentas, autenticación de usuarios y operaciones financieras, construido con una arquitectura escalable y buenas prácticas de desarrollo.',
            en: 'Web banking system focused on account management, user authentication and financial operations, built with a scalable architecture and good development practices.'
        },
        stack: [
            'React',
            '.NET 8',
            'Node.js',
            'PostgreSQL',
            'Docker'],
        url: 'https://github.com/dmarroquin-2024108/ChapinBank.git',
        images: [loginC, cuentas, deposito, productos, resumen]
    },
    {
        name: 'Debuggers Eats',
        category: { es: 'App Web', en: 'Web App' },
        description: {
            es: 'Es una plataforma orientada a la gestión y administración de servicios relacionados con Restaurantes, diseñada para facilitar la interacción entre usuarios y establecimientos.',
            en: 'A platform oriented to the management and administration of restaurant-related services, designed to facilitate interaction between users and establishments.'
        },
        stack: [
            'React',
            '.NET 8',
            'Node.js',
            'PostgreSQL',
            'Docker'],
        url: 'https://github.com/elopez-2021393/DebuggersEats.git',
        images: [loginD, menu, panel, reporte, users]
    },
    {
        name: 'FeelWell',
        category: { es: 'App Web', en: 'Web App' },
        description: {
            es: 'FeelWell es una plataforma de apoyo emocional que utiliza tecnología e inteligencia artificial para acompañar a los usuarios en el seguimiento de su bienestar mental.',
            en: 'FeelWell is an emotional support platform that uses technology and artificial intelligence to assist users in monitoring and improving their mental well-being.'
        },
        stack: [
            'React',
            '.NET 8',
            'Node.js',
            'PostgreSQL',
            'Docker'],
        url: 'https://github.com/jzeta-2021001/FeelWeell.git',
        images: [loginF, ejercicios, menuU, retos, tiyu ]
    },
]