// portfolio.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  categories = ['All', 'Mobile App Design', 'Web Application', 'Dashboard Design', 'Mobile App', 'Design System'];
  selectedCategory = 'All';

  projects = [
    {
      id: 1,
      title: 'FinanceFlow - Banking App',
      category: 'Mobile App Design',
      description: 'A comprehensive mobile banking application focused on user experience and financial management.',
      tags: ['Figma', 'React Native', 'TypeScript', 'Node.js'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'EcoShop - E-commerce Platform',
      category: 'Web Application',
      description: 'Sustainable shopping platform with focus on eco-friendly products and carbon footprint tracking.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      category: 'Dashboard Design',
      description: 'Medical dashboard for healthcare professionals to manage patient data and appointments.',
      tags: ['Vue.js', 'Chart.js', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 4,
      title: 'TravelPlan - Trip Planner',
      category: 'Mobile App',
      description: 'AI-powered travel planning app with personalized recommendations and itinerary management.',
      tags: ['Flutter', 'Firebase', 'TensorFlow', 'Google Maps API'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 5,
      title: 'CreativeStudio - Design System',
      category: 'Design System',
      description: 'Comprehensive design system and component library for creative agencies.',
      tags: ['Figma', 'Storybook', 'React', 'Sass'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 6,
      title: 'FitTrack - Fitness App',
      category: 'Mobile App',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['React Native', 'Redux', 'Firebase', 'HealthKit'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    }
  ];

  filteredProjects = this.projects;

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
}