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
            title: 'E-commerce RESTful API',
            shortDescription: 'Proyecto de e-commerce robusto y escalable construido con microservicios desacoplados (Usuarios, Productos, Pedidos, Carrito) en Java. Utiliza comunicación síncrona (REST) y asíncrona (RabbitMQ) orquestada por un API Gateway y Docker Compose, asegurando un entorno de despliegue consistente y seguro con JWT.',
            technologies: ['Spring Boot','JWT', 'Java', 'MySQL', 'RabbitMQ', 'Docker', 'REST API'],
            image: 'assets/images/ecomerce.jpg',
            repoLink: 'https://github.com/Carrillo1992/E-comerce-Microservicios',
            demoLink: ''
          }

        ]
    }

}
