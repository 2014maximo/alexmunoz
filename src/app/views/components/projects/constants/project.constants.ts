import { IProject } from "../models/project.model";

export const PROJECTS: IProject[] = [
    {
        title: 'E-commerce Dashboard',
        description: 'dECommerceDashboard',
        technologies: ['Flutter Web', 'Dark', 'Firebase'],
        githubUrl: 'https://github.com/tuUsuario/ecommerce-dashboard',
        demoUrl: 'https://demo-ecommerce-dashboard.com',
        imageUrl: 'assets/img/projects/ecommerce-dashboard.png',
        features: [
            'auth',
            'Gestión de inventario en tiempo real',
            'Análisis de ventas con gráficos',
            'Panel de administración responsive'
        ]
    },
    {
        title: 'Workface',
        description: 'dWorface',
        technologies: ['Firebase', 'Angular', 'CSS', 'html-to-image', 'Github pages'],
        githubUrl: 'https://github.com/2014maximo/workface',
        imageUrl: '	https://2014maximo.github.io/workface/assets/img/icons/logo-workface-white.png',
        demoUrl: 'https://2014maximo.github.io/workface/home',
        features: [
            'Autenticación con Firebase Auth',
            'Encriptación de datos con Firestore',
            'Generación de imágenes de perfil con html-to-image',
            'Interfaz de usuario responsiva con Angular bootstrap'
        ]
    },
    {
        title: 'PathPilot',
        description: 'Aplicación web para solucionar el problema del viajante, optimización de grupo de paradas para un viaje en las distancias más cortas.',
        technologies: ['Angular', 'Github pages', 'API de Google Maps'],
        githubUrl: 'https://github.com/tuUsuario/weather-pwa',
        demoUrl: 'https://weather-pwa-demo.com',
        imageUrl: 'assets/img/projects/weather-app.png',
        features: [
            'Autenticación con Firebase Auth',
            'Interfaz de usuario intuitiva',
            'Integración con la API de Google Maps para optimizar rutas',
            'Visualización de rutas en un mapa interactivo'
        ]
    }
];