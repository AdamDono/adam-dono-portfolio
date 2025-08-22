import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
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
    // Simulate CV download
    console.log('Downloading CV...');
    // In a real implementation, you would trigger a file download
    const link = document.createElement('a');
    link.href = '/assets/cv-adam-dono.pdf'; // Path to your CV file
    link.download = 'Adam-Dono-CV.pdf';
    link.click();
  }

  handleButtonClick(action: string) {
    if (action === 'scrollToPortfolio') {
      this.scrollToPortfolio();
    } else if (action === 'downloadCV') {
      this.downloadCV();
    }
  }
}