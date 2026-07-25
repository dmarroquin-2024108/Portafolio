import danielPhoto from '../assets/yo.png'
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
    role: 'Desarrollador Web & Backend Junior',
    location: 'Ciudad de Guatemala, Guatemala',
    age: '18 años',
    yearsDeveloping: '4+ años',
    formation: 'Perito en Informática',
    available: true,
    photo: danielPhoto,
    tagline: 'Haz lo que debes y está en lo que haces." — San Josemaría Escrivá',
    summary:
        'Desarrollador Full Stack en formación, con interés en el desarrollo de aplicaciones web y la creación de interfaces intuitivas junto con APIs robustas. Enfocado en escribir código limpio, aplicar buenas prácticas de desarrollo y fortalecer continuamente mis habilidades técnicas para construir soluciones eficientes y mantenibles.',
    email: 'mzabaladalejandro@gmail.com',
    cvUrl: CV,
    social: {
        github: 'https://github.com/dmarroquin-2024108',
        linkedin: 'https://linkedin.com/in/tu-usuario',
        computrabajo: 'https://www.computrabajo.com.gt/Daniel-Alejandro-Marroquín-Zabala'
    }
}

export const experience = [
    {
        role: 'Ingeniero de Software',
        company: 'Nombre de la Empresa',
        period: '2023 — Presente',
        description:
            'Desarrollo de features end-to-end en un producto SaaS, liderando la migración de la API a arquitectura modular y mejorando el tiempo de carga en un 40%.'
    },
    {
        role: 'Desarrollador Frontend',
        company: 'Otra Empresa',
        period: '2021 — 2023',
        description:
            'Construcción de interfaces con React y TypeScript, colaborando con diseño para implementar un sistema de componentes reutilizado en 4 productos.'
    },
    {
        role: 'Desarrollador Junior / Práctica Profesional',
        company: 'Primer Empleo',
        period: '2020 — 2021',
        description:
            'Mantenimiento de aplicaciones web, corrección de bugs y automatización de pruebas, reduciendo regresiones en producción.'
    }
]

export const education = [
    {
        degree: 'Educación Nivel Primaria - Básicos',
        school: 'Liceo Católico Santa Isabel',
        period: '2015 — 2023',
        description: 'Enfoque en la formación académica, ética y humana, fundamentada en valores y responsabilidad.'
    },
    {
        degree: 'Perito en Informática',
        school: 'Centro Educativo Técnico Laboral Kinal',
        period: '2024 - Actualidad',
        description: 'Enfoque en desarrollo de software, estructuras de datos, bases de datos y arquitectura de sistemas.'
    }
]

// level: 0-100, usado en la gráfica radar de habilidades
export const skills = [
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'JavaScript / Java / C#', level: 75, category: 'Lenguaje' },
    { name: 'MongoDB / SQL', level: 85, category: 'Base de datos' },
    { name: 'Tailwind CSS', level: 85, category: 'Estilos' },
    { name: 'Docker', level: 72, category: 'DevOps' },
    { name: 'React Native', level: 65, category: 'Mobile' },
    { name: 'Git / GitHub', level: 90, category: 'Control de versiones' }
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
        category: 'App Web ',
        description: 'Sistema bancario web enfocado en la gestión de cuentas, autenticación de usuarios y operaciones financieras, construido con una arquitectura escalable y buenas prácticas de desarrollo.',
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
        category: 'App Web ',
        description: 'Es una plataforma orientada a la gestión y administración de servicios relacionados con Restaurantes, diseñada para facilitar la interacción entre usuarios y establecimientos.',
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
        category: 'App Web ',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
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