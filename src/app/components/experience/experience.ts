import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  jobs = [
    {
      company: 'VdEnergy',
      role: 'Desarrollador Backend',
      period: 'oct. 2025 – actualidad',
      note: 'Ascendido de becario a jornada completa en cuatro meses',
      highlights: [
        'Principal desarrollador (~70 % de los commits) del pipeline de analítica en tiempo real, desde su creación hasta producción: 7 etapas ETL que materializan KPIs de negocio sobre ~3,6 M eventos diarios, con reintentos, dead-letter topics y métricas con HyperLogLog y scripts Lua.',
        'Integración de la plataforma de marcación telefónica con Kafka y envíos automáticos de SMS/RCS por lotes con Quartz, límite diario por teléfono y filtro de Lista Robinson.',
        'APIs REST de ventas, leads y puntos de suministro con autorización JWT/Cognito y OpenAPI, y un módulo de gestión de ausencias de extremo a extremo.',
        'Diagnóstico y resolución de 6 incidencias críticas de producción detectadas con Sentry, que sumaban ~3.300 eventos de error.',
        'Librería interna común (productor Kafka con reintentos, clientes Cognito/S3) reutilizada por todos los microservicios, desplegados en AWS EKS con Helm y GitLab CI/CD.',
        '520+ merge requests y 300+ revisiones de código en un año.'
      ],
      technologies: ['Java 21', 'Vert.x', 'Apache Kafka', 'Redis', 'MySQL', 'AWS', 'Kubernetes', 'Helm']
    },
    {
      company: 'Wellat',
      role: 'Desarrollador Backend (freelance)',
      period: 'jul. 2026 – sept. 2026',
      note: '',
      highlights: [
        'Diseño y construcción desde cero del motor de comunicaciones y engagement de la plataforma: máquina de estados, catálogo de plantillas, renderizado y deduplicación.',
        'Notificaciones push con Firebase (FCM) con prioridades, límite diario e idempotencia, verificadas con entregas reales (~80 ms de latencia por notificación).',
        'Migración del catálogo de plantillas de MongoDB a MySQL/JPA; ~30 tickets entregados en siete semanas.'
      ],
      technologies: ['Java', 'Spring Boot', 'Quartz', 'Firebase', 'MySQL', 'MongoDB']
    },
    {
      company: 'Anovo',
      role: 'Técnico Electrónico con funciones de desarrollo',
      period: 'dic. 2024 – jul. 2025',
      note: '',
      highlights: [
        'Desarrollo de APIs REST con Java 11 y Spring Boot y componentes en Angular para aplicaciones web internas, con pruebas en JUnit.'
      ],
      technologies: ['Java 11', 'Spring Boot', 'Angular', 'JUnit']
    }
  ];
}
