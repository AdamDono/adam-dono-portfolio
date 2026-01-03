import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    {
      type: 'experience',
      title: 'Full Stack Developer & UI/UX Designer',
      organization: 'Shaper',
      date: 'Oct 2024 - Present',
      description: 'Focusing on UI/UX design and full-stack development for in-house projects. Responsibilities include project planning, API integration, and course content development. I also serve as a team leader for interns, mentoring and helping them through their coding journey.',
      icon: 'ph ph-briefcase',
      side: 'left'
    },
    {
      type: 'experience',
      title: 'Full-Stack Development Intern',
      organization: 'The Digital Academy',
      date: 'Mar 2023 - Oct 2023',
      description: 'Worked with Angular and Flask to build responsive web applications, integrated RESTful APIs, and improved user experience.',
      icon: 'ph ph-code',
      side: 'right'
    },
    {
      type: 'education',
      title: 'Self-Taught Front-End',
      organization: 'Independent',
      date: '2022 - Present',
      description: 'Comprehensive study of modern web technologies, UI/UX principles, and design systems.',
      icon: 'ph ph-laptop',
      side: 'left'
    },
    {
      type: 'education',
      title: 'IT Systems Support',
      organization: 'Speccon',
      date: '2022 - 2023',
      description: 'NQF Level 5 qualification covering networking, operating systems, and professional IT infrastructure support.',
      icon: 'ph ph-desktop',
      side: 'right'
    },
    {
      type: 'education',
      title: 'Grade 12 (Matric)',
      organization: 'Thusa Setjhaba Secondary',
      date: '2014 - 2018',
      description: 'Successfully completed the National Senior Certificate (NSC).',
      icon: 'ph ph-graduation-cap',
      side: 'left'
    }
  ];
}