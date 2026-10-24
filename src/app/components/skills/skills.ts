import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills = [
    { name: 'Java', icon: 'java' },
    { name: 'Spring', icon: 'spring' },
    { name: 'Apache Kafka', icon: 'kafka' },
    { name: 'Redis', icon: 'redis' },
    { name: 'GitLab', icon: 'gitlab' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql'},
    { name: 'AWS', icon: 'aws' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'Git', icon: 'git' },
    { name: 'Postman', icon: 'postman'}
  ];
}
