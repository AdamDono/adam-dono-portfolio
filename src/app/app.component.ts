// src/app/app.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GithubActivityComponent } from './components/github-activity/github-activity.component';
import { ExperienceEducationComponent } from './experience-education/experience-education.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    SkillsComponent,
    GithubActivityComponent,
    ExperienceEducationComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    // Track unique visitor
    this.analyticsService.trackUniqueVisitor();
    // Track initial page view
    this.analyticsService.trackPageView('home');
  }
}