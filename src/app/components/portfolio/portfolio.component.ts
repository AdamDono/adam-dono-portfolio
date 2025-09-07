// portfolio.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  categories = ['All', 'UI/UX Design', 'Web Application'];
  selectedCategory = 'All';

  projects = [
    //Web applications/ coding
    {
      id: 1,
      title: 'BuyMo - E-commerce Platform',
      category: 'Web Application',
      description: 'A comprehensive mobile banking application focused on user experience and financial management.',
      tags: ['HTMl', 'CSS', 'Bootstrap', 'Python', 'Flask', 'PostgresSQL' ],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'MovieBuddy - Movie Application',
      category: 'Web Application',
      description: 'Sustainable shopping platform with focus on eco-friendly products and carbon footprint tracking.',
      tags: ['Angular', 'Typescript', 'Bootstrap', 'Render', 'API'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },



   
    {
      id: 3,
      title: 'Pace Academy - LMS',
      category: 'Web Application',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['HTML', 'CSS', 'Bootstrap', 'Python ', 'Flask', 'PostgresSQL', 'Postman'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
        {
      id: 4,
      title: 'PowerRent - Rental Application',
      category: 'Web Application',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['Angular', 'Bootstrap', 'Python ', 'Flask', 'PostgresSQL', 'Postman'],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },

    //Design Projects/figma

         {
      id: 5,
      title: 'Portfolio Management System',
      category: 'UI/UX Design',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['Figma', 'WireFrame', 'Prototype '],
      demoLink: '#',
      codeLink: '#',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },

    
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