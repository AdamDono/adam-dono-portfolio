import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEntry {
  type: 'experience' | 'education';
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string; // Font Awesome class
  side: 'left' | 'right'; // For layout
}

@Component({
  selector: 'app-experience-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent {
  timeline: TimelineEntry[] = [
    // Education entries (add your real ones)
    {
      type: 'education',
      title: 'B.S. in Computer Science',
      organization: 'University of Example',
      date: '2019 - 2023',
      description: 'Focused on UI/UX design, full-stack development, and data structures. GPA: 3.8/4.0.',
      icon: 'fas fa-graduation-cap',
      side: 'left'
    },
    {
      type: 'education',
      title: 'Google UX Design Certificate',
      organization: 'Coursera',
      date: '2024',
      description: 'Completed 6-month program on user-centered design, prototyping, and accessibility.',
      icon: 'fas fa-certificate',
      side: 'right'
    },
    // Experience entries (add your real ones)
    {
      type: 'experience',
      title: 'Full-Stack Developer',
      organization: 'Tech Startup Inc.',
      date: '2023 - Present',
      description: 'Built responsive web apps with Angular and Flask, integrated APIs, and optimized for performance. Collaborated on 5+ projects.',
      icon: 'fas fa-laptop-code',
      side: 'left'
    },
    {
      type: 'experience',
      title: 'UI/UX Intern',
      organization: 'Design Agency',
      date: '2022 - 2023',
      description: 'Designed wireframes in Figma, conducted user research, and iterated on prototypes for mobile apps.',
      icon: 'fas fa-palette',
      side: 'right'
    }
    // Add more as needed—reverse chronological order for best flow
  ];
}