import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-meteor-shower',
  imports: [CommonModule],
  template: '<canvas #starfieldCanvas></canvas>',
  styleUrl: './meteor-shower.scss'
})
export class MeteorShower implements OnInit, OnDestroy {
  @ViewChild('starfieldCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number = 0;
  private stars: any[] = [];

  private numStars: number = window.innerWidth<=500 ? 500 : 2500;
  private maxSpeed: number = window.innerWidth<=500 ? 0.5 : 1;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(window.innerWidth + "stars" + this.numStars);
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.resizeCanvas();

    // Inicializa las estrellas
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push(this.createStar());
    }

    this.renderer.listen('window', 'resize', () => {
      this.resizeCanvas();
    });

    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }

  private resizeCanvas(): void {
    this.canvasRef.nativeElement.width = window.innerWidth;
    this.canvasRef.nativeElement.height = window.innerHeight;
  }

  private createStar(): any {
    return {
      x: Math.random() * window.innerWidth - window.innerWidth / 2,
      y: Math.random() * window.innerHeight - window.innerHeight / 2,
      z: Math.random() * window.innerWidth,
    };
  }

  private animate(): void {
    this.ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx!.fillStyle = '#0F0920';
    this.ctx!.fillRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < this.numStars; i++) {
      const star = this.stars[i];

      star.z -= this.maxSpeed;

      if (star.z < 1) {
        Object.assign(star, this.createStar());
        star.z = window.innerWidth;
      }

      const scale = window.innerWidth / star.z;
      const x = star.x * scale + window.innerWidth / 2;
      const y = star.y * scale + window.innerHeight / 2;

      const size = Math.max(0, scale * 2);
      const opacity = Math.max(0, Math.min(1, scale * 0.2));

      this.ctx!.beginPath();
      this.ctx!.arc(x, y, size / 2, 0, Math.PI * 2);
      this.ctx!.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      this.ctx!.fill();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
}
