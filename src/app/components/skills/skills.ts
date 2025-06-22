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
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Git', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
    { name: 'AWS', icon: 'aws' },
    { name: 'PostgreSQL', icon: 'postgresql'},
    { name: 'Postman', icon: 'postman'}
  ];
}
