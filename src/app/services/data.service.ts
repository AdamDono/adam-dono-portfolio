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
        icon: 'fas fa-pencil-ruler'
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
        icon: 'fas fa-palette'
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'E-commerce Platform (BuyMo)',
        description: 'A complete online shopping solution with intuitive product browsing and checkout flow.',
        imageUrl: 'assets/images/project1.jpg',
        tags: [ 'Web Development'],
        link: '#',
        featured: true
      },
      {
        id: 2,
        title: 'Mobile Banking App',
        description: 'Redesigned mobile banking experience with improved navigation and transaction flows.',
        imageUrl: 'assets/images/project2.jpg',
        tags: ['Mobile UI', 'User Testing'],
        link: '#'
      },
      {
        id: 3,
        title: 'Portfolio Website',
        description: 'Minimalist portfolio website for a photographer with focus on visual content.',
        imageUrl: 'assets/images/project3.jpg',
        tags: ['Web Design', 'Development'],
        link: '#'
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        author: 'Jane Smith',
        position: 'CEO, TechCorp',
        content: 'Adam transformed our digital presence with his thoughtful designs and attention to detail.',
        avatarUrl: 'assets/images/avatar1.jpg'
      },
      {
        id: 2,
        author: 'Michael Johnson',
        position: 'Product Manager, InnovateCo',
        content: 'Working with Adam was a pleasure. He delivered beyond our expectations on tight deadlines.',
        avatarUrl: 'assets/images/avatar2.jpg'
      }
    ];
  }
}