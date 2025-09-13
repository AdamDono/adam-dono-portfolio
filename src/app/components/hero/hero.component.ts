import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],  // Add CommonModule if @for requires it for standalone components
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  title = "UI/UX Designer & Developer";
  subtitle = "crafting exceptional digital experiences that users love";
  description = "With over 3+ years of experience, I specialize in creating beautiful, functional, and user-centered designs that drive business results.";
  ctaButtons = [
    { text: 'View My Work', action: 'scrollToPortfolio', class: 'primary' },
    { text: 'Download CV', action: 'downloadCV', class: 'secondary' }
  ];

  scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/cv-adam-dono.pdf';  // Path relative to public folder
    link.download = 'Adam-Dono-CV.pdf';  // Forces this filename on download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Downloading CV...');
  }

  handleButtonClick(action: string) {
    if (action === 'scrollToPortfolio') {
      this.scrollToPortfolio();
    } else if (action === 'downloadCV') {
      this.downloadCV();
    }
  }
}