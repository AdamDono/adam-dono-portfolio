// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GithubActivityComponent } from './components/github-activity/github-activity.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Keep this if you need it for *ngIf, *ngFor, etc.
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    GithubActivityComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}