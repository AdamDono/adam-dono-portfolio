import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Service } from '../models/service.model';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getServices(): Service[] {
    return [
      {
        id: 1,
        title: 'UI/UX Design',
        description: 'Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.',
        icon: 'fas fa-palette'
      },
      {
        id: 2,
        title: 'Web Development',
        description: 'Building responsive, performant websites using modern technologies and best practices.',
        icon: 'fas fa-code'
      },
      {
        id: 3,
        title: 'Brand Identity',
        description: 'Developing cohesive brand identities that communicate your values and resonate with your audience.',
        icon: 'fas fa-swatchbook'
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'BuyMo E-commerce',
        description: 'A full-stack e-commerce solution with dynamic product management and secure checkout.',
        imageUrl: '/profile-pic.jpg',
        videoUrl: '/BuyMoPromoVid.mov',
        tags: ['Angular', 'Python', 'Flask', 'PostgreSQL'],
        category: 'Web Application',
        demoLink: 'https://buymo.example.com',
        codeLink: 'https://github.com/adamdono/buymo',
        caseStudy: {
          problem: 'Retailers needed a more performant way to manage large inventories.',
          solution: 'Built a custom inventory engine with real-time sync.',
          results: '30% faster load times and 20% higher conversion.',
          metrics: [
            { label: 'Speed', value: '+30%', icon: 'ph ph-lightning' },
            { label: 'Growth', value: '2.5x', icon: 'ph ph-trend-up' }
          ]
        }
      },
      {
        id: 2,
        title: 'PowerRent Application',
        description: 'Interactive equipment rental platform with real-time availability and social proof features.',
        imageUrl: '/profile-pic.jpg',
        videoUrl: '/PowerRent Screen Record.mov',
        tags: ['TypeScript', 'Angular', 'Tailwind'],
        category: 'Web Application',
        demoLink: 'https://powerrent.example.com',
        codeLink: 'https://github.com/adamdono/powerrent',
        caseStudy: {
          problem: 'Equipment rental management was manual and prone to errors.',
          solution: 'Developed a robust scheduling and booking system.',
          results: 'Reduced administrative overhead by 40% in the first month.',
          metrics: [
            { label: 'Efficiency', value: '+40%', icon: 'ph ph-users-three' },
            { label: 'Accuracy', value: '99%', icon: 'ph ph-check-circle' }
          ]
        }
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        author: 'Sarah Chen',
        position: 'CEO at TechScale',
        content: 'Adam\'s design sense is unparalleled. He didn\'t just build a dashboard; he created an experience that our users absolutely love. His attention to detail and technical execution are world-class.',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
      },
      {
        id: 2,
        author: 'Marcus J.',
        position: 'Product Owner',
        content: 'A visionary designer who understands the bridge between business goals and user needs. The Pulse project was a massive success thanks to his methodical approach to UX.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
      }
    ];
  }
}