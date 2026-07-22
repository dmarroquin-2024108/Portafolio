import maradonaPhoto from '../assets/maradona.jpg'
import CV from '../assets/CV-Daniel-Marroquin-Zabala.pdf'

export const profile = {
    brand: 'DM developer',
    name: 'Daniel Marroquín',
    role: 'Desarrollador Web & Backend Senior',
    location: 'Ciudad de Guatemala, Guatemala',
    age: '24 años',
    yearsDeveloping: '4+ años',
    formation: 'Ingeniería en Ciencias de la Computación — en curso',
    available: true,
    photo: maradonaPhoto,
    tagline: 'Cada línea de código es un pase con intención: construyo con la misma disciplina con la que se entrena una jugada, buscando que el equipo — y el producto — ganen.',
    summary:
        'Desarrollador full stack enfocado en construir interfaces limpias y APIs sólidas. Juego en equipo, entreno todos los días mi criterio técnico y disfruto convertir ideas ambiciosas en software estable, mantenible y listo para producción.',
    email: 'tucorreo@ejemplo.com',
    phone: '+502 0000 0000',
    cvUrl: CV,
    social: {
        github: 'https://github.com/tu-usuario',
        linkedin: 'https://linkedin.com/in/tu-usuario',
        computrabajo: 'https://www.computrabajo.com.gt/tu-usuario'
    }
}

export const stats = [
    { value: '20+', label: 'Proyectos entregados' },
    { value: '4+', label: 'Años de experiencia' },
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
        role: 'Desarrollador Junior / Práctica Profesional',
        company: 'Primer Empleo',
        period: '2020 — 2021',
        description:
            'Mantenimiento de aplicaciones web, corrección de bugs y automatización de pruebas, reduciendo regresiones en producción.'
    }
]

export const education = [
    {
        degree: 'Ingeniería en Ciencias de la Computación',
        school: 'Nombre de tu Universidad',
        period: '2021 — Presente',
        description: 'Enfoque en desarrollo de software, estructuras de datos, bases de datos y arquitectura de sistemas.'
    },
    {
        degree: 'Certificación en Desarrollo Web Full Stack',
        school: 'Plataforma / Bootcamp',
        period: '2020',
        description: 'Formación intensiva en JavaScript moderno, React, Node.js y buenas prácticas de ingeniería.'
    }
]

// level: 0-100, usado en la gráfica radar de habilidades
export const skills = [
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js / Express', level: 85, category: 'Backend' },
    { name: 'JavaScript / TS', level: 88, category: 'Lenguaje' },
    { name: 'MongoDB / SQL', level: 75, category: 'Base de datos' },
    { name: 'Tailwind CSS', level: 92, category: 'Estilos' },
    { name: 'Docker', level: 85, category: 'DevOps' },
    { name: 'React Native', level: 78, category: 'Mobile' },
    { name: 'Git / GitHub', level: 90, category: 'Control de versiones' }
]

// showcase: solo proyectos con interfaz gráfica, para el carrusel visual
export const showcaseProjects = [
    { name: 'Nombre del Proyecto', image: null },
    { name: 'Otro Proyecto', image: null },
    { name: 'Proyecto Personal', image: null }
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