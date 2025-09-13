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
      title: 'Grade 12 (Matric)',
      organization: 'Thusa Setjhaba Secondary School',
      date: '2014 - 2018',
      description: 'Successfully completed the National Senior Certificate (NSC)',
      icon: 'fas fa-graduation-cap',
      side: 'left'
    },
{
  type: 'education',
  title: 'Self-Taught Front-End Development',
  organization: 'Independent Learning',
  date: '2022 - Present',
  description: 'Began a self-directed learning journey focusing on front-end web development. Gained practical skills in HTML, CSS, JavaScript, and modern frameworks, while exploring responsive design, UI/UX principles, and project-based problem-solving.',
  icon: 'fas fa-laptop-code',
  side: 'right'
},


    // Experience entries (add your real ones)
{
  type: 'experience',
  title: 'Full-Stack Development Intern',
  organization: 'The Digital Academy',
  date: 'Apr 2023 - Oct 2023',
  description: 'Joined as an intern to gain hands-on experience in full-stack development. Worked with Angular and Flask to build and maintain responsive web applications, integrated RESTful APIs, and contributed to improving performance and user experience. Collaborated with the team on multiple projects while strengthening practical coding and problem-solving skills.',
  icon: 'fas fa-laptop-code',
  side: 'left'
},
{
  type: 'experience',
  title: 'Full-Stack Development Intern',
  organization: 'The Digital Academy',
  date: 'Apr 2023 - Oct 2023',
  description: 'Joined as an intern to gain hands-on experience in full-stack development. Worked with Angular and Flask to build and maintain responsive web applications, integrated RESTful APIs, and contributed to improving performance and user experience. Collaborated with the team on multiple projects while strengthening practical coding and problem-solving skills.',
  icon: 'fas fa-laptop-code',
  side: 'right'
}
,
{
  type: 'education',
  title: 'IT Systems Support (NQ5)',
  organization: 'Speccon',
  date: ' 2022 - 2023 ',
  description: 'Completed an NQF Level 5 qualification in IT Systems Support, covering computer networks, operating systems, hardware and software support, and troubleshooting. Gained practical skills in system administration, user support, and maintaining secure and efficient IT environments.',
  icon: 'fas fa-network-wired',
  side: 'left'
},



    
  ];
}