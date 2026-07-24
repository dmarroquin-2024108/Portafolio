import danielPhoto from '../assets/yo.png'
import ChapinLogo from '../assets/ChapinBank.jpeg'
import DebuggersLogo from '../assets/DebuggersEats.jpeg'
import FeelWell from '../assets/FeelWell.jpeg'
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
    { name: 'Node.js / Express', level: 75, category: 'Backend' },
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
        name: 'Nombre del Proyecto',
        category: 'App Web · Full Stack',
        description: 'Breve descripción de qué resuelve el proyecto y qué tecnologías usaste.',
        stack: ['React', 'Node.js', 'PostgreSQL'],
        url: 'https://github.com/tu-usuario/proyecto-1',
        images: []
    },
    {
        name: 'Otro Proyecto',
        category: 'API · Backend',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
        stack: ['Express', 'MongoDB', 'Docker'],
        url: 'https://github.com/tu-usuario/proyecto-2',
        images: []
    },
    {
        name: 'Proyecto Personal',
        category: 'Herramienta · Open Source',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
        stack: ['TypeScript', 'Vite', 'Tailwind'],
        url: 'https://github.com/tu-usuario/proyecto-3',
        images: []
    },
    {
        name: 'Cuarto Proyecto',
        category: 'Mobile · React Native',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
        stack: ['React Native', 'Firebase'],
        url: 'https://github.com/tu-usuario/proyecto-4',
        images: []
    }
]