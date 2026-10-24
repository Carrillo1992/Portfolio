import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit{
  projects:any[] = []
    ngOnInit(): void {
        this.projects=[
          {
            id: 1,
            title: 'GeoReport',
            shortDescription: 'Sistema para registrar ensayos de penetración dinámica (DPSH) en campo y generar sus informes técnicos. App móvil offline-first que guarda golpeos cada 20 cm, coordenadas GPS en UTM y foto del ensayo en SQLite, y los sincroniza de forma idempotente con un backend REST que genera los informes PDF por ensayo o por proyecto, con gráfica de penetración incluida.',
            technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React Native', 'Expo', 'TypeScript', 'SQLite', 'OpenAPI'],
            image: 'assets/images/projects/georeport.svg',
            repoLink: '',
            demoLink: ''
          },
          {
            id: 2,
            title: 'Community Budget',
            shortDescription: 'Backend para gestionar gastos compartidos entre grupos (pisos, viajes, parejas), al estilo de Settle Up. Calcula automáticamente balances y quién debe a quién, con autenticación JWT (access y refresh tokens), login con Google OAuth2 y recuperación de contraseña por email. Diseñado con arquitectura hexagonal y DDD.',
            technologies: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT', 'MySQL', 'MapStruct', 'Docker'],
            image: 'assets/images/projects/community-budget.svg',
            repoLink: 'https://github.com/Carrillo1992/CommunityBudgetBack',
            demoLink: ''
          },
          {
            id: 3,
            title: 'E-commerce RESTful API',
            shortDescription: 'Proyecto de e-commerce robusto y escalable construido con microservicios desacoplados (Usuarios, Productos, Pedidos, Carrito) en Java. Utiliza comunicación síncrona (REST) y asíncrona (RabbitMQ) orquestada por un API Gateway y Docker Compose, asegurando un entorno de despliegue consistente y seguro con JWT.',
            technologies: ['Spring Boot','JWT', 'Java', 'MySQL', 'RabbitMQ', 'Docker', 'REST API'],
            image: 'assets/images/projects/ecommerce.svg',
            repoLink: 'https://github.com/Carrillo1992/E-commerce-Microservicios',
            demoLink: ''
          },
          {
            id: 4,
            title: 'Task Manager API',
            shortDescription: 'API REST para gestionar tareas organizadas por categorías y estados, con usuarios y roles. Seguridad stateless con Spring Security y JWT, validación de datos, manejo global de errores y documentación interactiva con Swagger.',
            technologies: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'OpenAPI'],
            image: 'assets/images/projects/task-manager.svg',
            repoLink: 'https://github.com/Carrillo1992/Task-Manager',
            demoLink: ''
          }
        ]
    }

}
