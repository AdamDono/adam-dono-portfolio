import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
   standalone: true,
   imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isScrolled = false;
  activeSection: string = 'home';
  isMobileView = false;

  navItems = [
    { path: 'home', label: 'Home' },
     { path: 'about', label: 'About' },
    { path: 'services', label: 'Services' },
    { path: 'portfolio', label: 'Work' },
      { path: 'skills', label: 'Skills' }, 
    { path: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.checkViewport();
    this.updateActiveSection();
    
    window.addEventListener('resize', () => {
      this.checkViewport();
      if (!this.isMobileView && this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
      }
    });
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 768;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollTo(section: string) {
    this.closeMobileMenu();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  updateActiveSection() {
    const scrollPosition = window.scrollY + 100;
    
    for (const item of this.navItems) {
      const element = document.getElementById(item.path);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = item.path;
          break;
        }
      }
    }
  }
}