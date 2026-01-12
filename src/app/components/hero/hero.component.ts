import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],  // Add CommonModule if @for requires it for standalone components
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  title = "UFull-Stack Developer & UI/UX Designer";
  subtitle = "crafting exceptional digital experiences that users love";
  description = "With over 3+ years of experience, I specialize in creating beautiful, functional, and user-centered designs that drive business results.";
  ctaButtons = [
    { text: 'View My Work', action: 'scrollToPortfolio', class: 'primary' },
    { text: 'Download CV', action: 'downloadCV', class: 'secondary' }
  ];

  // Typing animation properties
  typedText = '';
  private textToType = "Full-Stack Developer & UI/UX Designer";
  private typingSpeed = 100; // milliseconds per character
  private deletingSpeed = 50;
  private pauseTime = 2000; // pause before deleting
  private typingInterval: any;
  private isDeleting = false;
  private charIndex = 0;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTypingAnimation() {
    const type = () => {
      if (!this.isDeleting && this.charIndex < this.textToType.length) {
        // Typing
        this.typedText = this.textToType.substring(0, this.charIndex + 1);
        this.charIndex++;
        this.typingInterval = setTimeout(type, this.typingSpeed);
      } else if (!this.isDeleting && this.charIndex === this.textToType.length) {
        // Pause before deleting
        this.typingInterval = setTimeout(() => {
          this.isDeleting = true;
          type();
        }, this.pauseTime);
      } else if (this.isDeleting && this.charIndex > 0) {
        // Deleting
        this.charIndex--;
        this.typedText = this.textToType.substring(0, this.charIndex);
        this.typingInterval = setTimeout(type, this.deletingSpeed);
      } else if (this.isDeleting && this.charIndex === 0) {
        // Start typing again
        this.isDeleting = false;
        this.typingInterval = setTimeout(type, 500);
      }
    };
    type();
  }

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