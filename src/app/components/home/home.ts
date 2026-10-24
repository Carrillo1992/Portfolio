import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DomSanitizer} from '@angular/platform-browser';
import {Projects} from '../projects/projects';
import {Skills} from '../skills/skills';
import {About} from '../about/about';
import {Contact} from '../contact/contact';
import {Footer} from '../footer/footer';
import {Navbar} from '../navbar/navbar';
import {Experience} from '../experience/experience';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    Projects,
    Skills,
    About,
    Experience,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home{
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        'linkedin',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
      );
      this.matIconRegistry.addSvgIcon(
        'github',
        this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
      );
    this.matIconRegistry.addSvgIcon(
      'java',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/java.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'spring',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/spring.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mysql',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mysql.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'git',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/git.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'docker',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/docker.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'aws',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/aws.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'postgresql',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/postgresql.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'postman',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/postman.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'kafka',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kafka.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'redis',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/redis.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'kubernetes',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/kubernetes.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'gitlab',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/gitlab.svg')
    );
    }
}
