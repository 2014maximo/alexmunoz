import { IProject } from "../models/project.model";

export const PROJECTS: IProject[] = [
    {
        title: 'E-commerce Dashboard',
        description: 'Panel de administración para tienda online con gestión de productos, pedidos y usuarios. Incluye gráficos de ventas y sistema de notificaciones.',
        technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Chart.js', 'Firebase'],
        githubUrl: 'https://github.com/tuUsuario/ecommerce-dashboard',
        demoUrl: 'https://demo-ecommerce-dashboard.com',
        imageUrl: 'assets/img/projects/ecommerce-dashboard.png',
        features: [
            'Autenticación y autorización',
            'Gestión de inventario en tiempo real',
            'Análisis de ventas con gráficos',
            'Panel de administración responsive'
        ]
    },
    {
        title: 'Task Management API',
        description: 'API RESTful para gestión de tareas y proyectos. Implementa arquitectura limpia y principios SOLID.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Docker'],
        githubUrl: 'https://github.com/tuUsuario/task-management-api',
        imageUrl: 'assets/img/projects/task-api.png',
        features: [
            'Arquitectura de microservicios',
            'Testing automatizado',
            'Documentación con Swagger',
            'Containerización con Docker'
        ]
    },
    {
        title: 'Weather App PWA',
        description: 'Aplicación web progresiva para consulta del clima que funciona offline y tiene diseño responsivo.',
        technologies: ['React', 'Redux', 'PWA', 'Weather API', 'SCSS'],
        githubUrl: 'https://github.com/tuUsuario/weather-pwa',
        demoUrl: 'https://weather-pwa-demo.com',
        imageUrl: 'assets/img/projects/weather-app.png',
        features: [
            'Funcionamiento offline',
            'Geolocalización',
            'Pronóstico por 5 días',
            'Instalable como PWA'
        ]
    }
];