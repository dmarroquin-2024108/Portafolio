import maradonaPhoto from '../assets/maradona.jpg';
import CV from '../assets/CV-Daniel-Alejandro-Marroquín-Zabala.pdf'

export const profile = {
    name: 'Daniel Marroquín',
    role: 'Desarrollador Full Stack',
    location: 'Ciudad de Guatemala, Guatemala',
    available: true,
    photo: maradonaPhoto,
    tagline: 'Construyo productos web rápidos, accesibles y mantenibles.',
    summary:
        'Me especializo en construir interfaces limpias y APIs sólidas, combinando buenas prácticas de ingeniería con atención al detalle. Me enfoco en escribir código legible, probado y fácil de escalar, para que las ideas lleguen a producción sin fricción.',
    email: 'tucorreo@ejemplo.com',
    phone: '+502 0000 0000',
    cvUrl: CV,
    social: {
        github: 'https://github.com/tu-usuario',
        linkedin: 'https://linkedin.com/in/tu-usuario',
        twitter: 'https://x.com/tu-usuario',
        website: 'https://tu-sitio.dev'
    }
}

export const stats = [
    { value: '20+', label: 'Proyectos entregados' },
    { value: '3+', label: 'Años de experiencia' },
    { value: '15+', label: 'Clientes felices' },
    { value: '5', label: 'Stacks dominados' }
]

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
        role: 'Desarrollador Junior',
        company: 'Primer Empleo',
        period: '2020 — 2021',
        description:
            'Mantenimiento de aplicaciones web, corrección de bugs y automatización de pruebas, reduciendo regresiones en producción.'
    }
]

export const projects = [
    {
        name: 'Nombre del Proyecto',
        category: 'App Web · Full Stack',
        description: 'Breve descripción de qué resuelve el proyecto y qué tecnologías usaste.',
        stack: ['React', 'Node.js', 'PostgreSQL'],
        url: 'https://github.com/tu-usuario/proyecto-1',
        image: null
    },
    {
        name: 'Otro Proyecto',
        category: 'API · Backend',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
        stack: ['Express', 'MongoDB', 'Docker'],
        url: 'https://github.com/tu-usuario/proyecto-2',
        image: null
    },
    {
        name: 'Proyecto Personal',
        category: 'Herramienta · Open Source',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
        stack: ['TypeScript', 'Vite', 'Tailwind'],
        url: 'https://github.com/tu-usuario/proyecto-3',
        image: null
    },
    {
        name: 'Cuarto Proyecto',
        category: 'Mobile · React Native',
        description: 'Breve descripción del proyecto, el problema que resuelve y el impacto que tuvo.',
        stack: ['React Native', 'Firebase'],
        url: 'https://github.com/tu-usuario/proyecto-4',
        image: null
    }
]

export const education = [
    {
        degree: 'Ingeniería en Ciencias de la Computación',
        school: 'Nombre de tu Universidad',
        period: '2017 — 2021',
        description: 'Enfoque en desarrollo de software, estructuras de datos y bases de datos.'
    },
    {
        degree: 'Certificación en Desarrollo Web Full Stack',
        school: 'Plataforma / Bootcamp',
        period: '2020',
        description: 'Formación intensiva en JavaScript moderno, React y Node.js.'
    }
]

export const skills = [
    { name: 'JavaScript / TypeScript', category: 'Lenguaje' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js / Express', category: 'Backend' },
    { name: 'PostgreSQL / MongoDB', category: 'Base de datos' },
    { name: 'Tailwind CSS', category: 'Estilos' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git / GitHub', category: 'Control de versiones' },
    { name: 'REST / GraphQL', category: 'APIs' }
]