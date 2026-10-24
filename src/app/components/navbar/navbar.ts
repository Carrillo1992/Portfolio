import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Acerca de mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Skills' }
  ];
  // La sección cuenta como visible cuando su borde superior pasa por debajo de la barra
  private readonly offset = 120;
  activeSection = 'home';
  menuOpen = false;
  private ticking = false;

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.ticking = false;
      this.updateActiveSection();
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768) this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  private updateActiveSection(): void {
    let current = 'home';
    for (const id of [...this.links.map(l => l.id), 'contact']) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= this.offset) current = id;
    }
    this.activeSection = current;
  }
}
