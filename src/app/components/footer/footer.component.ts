import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { icon: 'ph ph-github-logo', url: 'https://github.com' },
    { icon: 'ph ph-linkedin-logo', url: 'https://linkedin.com' },
    { icon: 'ph ph-dribbble-logo', url: 'https://dribbble.com' },
    { icon: 'ph ph-twitter-logo', url: 'https://twitter.com' }
  ];
}