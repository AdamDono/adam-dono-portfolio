// portfolio.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CaseStudyModalComponent } from '../case-study-modal/case-study-modal.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CaseStudyModalComponent, LoadingComponent, SafeUrlPipe],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  categories = ['All', 'UI/UX Design', 'Web Application'];
  selectedCategory = 'All';
  isLoading = true;
  selectedProject: Project | null = null;

  projects: Project[] = [
    //Web applications/ coding
    {
      id: 1,
      title: 'BuyMo - E-commerce Platform',
      category: 'Web Application',
      description: 'A comprehensive mobile banking application focused on user experience and financial management.',
      tags: ['HTMl', 'CSS', 'Bootstrap', 'Python', 'Flask', 'PostgresSQL' ],
      demoLink: 'https://buymo.onrender.com/',
      codeLink: 'https://github.com/AdamDono/BuyMo',
      youtubeUrl: 'https://www.youtube.com/embed/OEtk27KLCSs?autoplay=1&mute=1&loop=1&playlist=OEtk27KLCSs&vq=hd1080',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'MovieBuddy - Movie Application',
      category: 'Web Application',
      description: 'Sustainable shopping platform with focus on eco-friendly products and carbon footprint tracking.',
      tags: ['Angular', 'Typescript', 'Bootstrap', 'Render', 'API'],
      youtubeUrl: 'https://www.youtube.com/embed/gG6g58LUiXA?autoplay=1&mute=1&loop=1&playlist=gG6g58LUiXA&vq=hd1080',
      demoLink: 'https://adamdono.github.io/movieapi/',
      codeLink: 'https://github.com/AdamDono/movieapi',
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
      youtubeUrl: 'https://www.youtube.com/embed/yNtJ8E_1uLE?autoplay=1&mute=1&loop=1&playlist=yNtJ8E_1uLE&vq=hd1080',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true,
      privateRepo: true
    },

    //Design Projects/figma

         {
      id: 5,
      title: 'Portfolio Management System',
      category: 'UI/UX Design',
      description: 'A comprehensive investment portfolio management platform designed to simplify financial tracking and decision-making.',
      tags: ['Figma', 'WireFrame', 'Prototype', 'User Research'],
      demoLink: 'https://www.figma.com/design/Gwve2tObvaz8X7JG0dWvEp/Portfolio-Management?node-id=0-1&t=0ROvbfUMITutOBqz-1',
      codeLink: 'https://www.figma.com/design/Gwve2tObvaz8X7JG0dWvEp/Portfolio-Management?node-id=0-1&t=0ROvbfUMITutOBqz-1',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true,
      caseStudy: {
        problem: 'Investment firms struggled with fragmented portfolio management tools that required multiple platforms to track assets, analyze performance, and generate reports. Users found existing solutions overwhelming with cluttered interfaces and steep learning curves, leading to poor adoption rates and inefficient workflows.',
        solution: 'Designed an intuitive, unified portfolio management system with a clean dashboard that consolidates all critical information. Implemented a card-based layout for easy scanning, interactive charts for performance visualization, and a streamlined workflow for adding and managing investments. Conducted extensive user testing with financial advisors to refine the interface.',
        results: 'The redesigned platform significantly improved user experience and operational efficiency. Users reported completing tasks 50% faster, and the intuitive interface reduced onboarding time from 2 weeks to 3 days. The platform received positive feedback for its clarity and ease of use.',
        metrics: [
          { label: 'User Engagement', value: '+40%', icon: 'fas fa-users' },
          { label: 'Task Completion Time', value: '-50%', icon: 'fas fa-clock' },
          { label: 'User Satisfaction', value: '4.8/5', icon: 'fas fa-star' },
          { label: 'Onboarding Time', value: '-85%', icon: 'fas fa-rocket' }
        ],
        beforeImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        afterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        testimonial: {
          quote: 'The new portfolio management system has transformed how our team works. What used to take hours now takes minutes, and our clients love the clarity of the reports.',
          author: 'Jennifer Martinez',
          role: 'Senior Financial Advisor'
        }
      }
    },

            {
      id: 6,
      title: 'PowerRent',
      category: 'UI/UX Design',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['Figma', 'WireFrame', 'Prototype '],
      demoLink: 'https://www.figma.com/design/96Xn1G5BuppT2wNgfRDyjA/PowerRent?node-id=0-1&t=866WwOQDyIAGpN2p-1',
      codeLink: 'https://www.figma.com/design/96Xn1G5BuppT2wNgfRDyjA/PowerRent?node-id=0-1&t=866WwOQDyIAGpN2p-1',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },

             {
      id: 7,
      title: 'In-Need',
      category: 'UI/UX Design',
      description: 'A community-driven platform connecting people in need with local volunteers and resources.',
      tags: ['Figma', 'WireFrame', 'Prototype', 'Social Impact'],
      demoLink: 'https://www.figma.com/design/I4gGd7rddAv5avkhXgskz6/In-Need?node-id=50-116&t=NyJ51XDhrQlYkJHy-1',
      codeLink: 'https://www.figma.com/design/I4gGd7rddAv5avkhXgskz6/In-Need?node-id=50-116&t=NyJ51XDhrQlYkJHy-1',
      imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true,
      caseStudy: {
        problem: 'Community members in need often struggled to find local help, while volunteers had no centralized way to discover opportunities. Existing platforms were either too complex, lacked local focus, or had trust and safety concerns that prevented widespread adoption.',
        solution: 'Created a mobile-first platform with location-based matching, verified user profiles, and an intuitive request/offer system. Implemented clear categories for different types of needs (food, transportation, skills, etc.), real-time notifications, and an in-app messaging system. Designed with accessibility in mind to ensure the platform serves all community members.',
        results: 'The platform successfully connected thousands of community members, facilitating meaningful local connections. The simple, trust-focused design led to high engagement rates and positive community impact.',
        metrics: [
          { label: 'Active Users', value: '5,000+', icon: 'fas fa-users' },
          { label: 'Successful Connections', value: '2,500+', icon: 'fas fa-handshake' },
          { label: 'User Retention', value: '78%', icon: 'fas fa-chart-line' },
          { label: 'Average Response Time', value: '< 2hrs', icon: 'fas fa-clock' }
        ],
        testimonial: {
          quote: 'In-Need has transformed our community. The design makes it so easy to help neighbors in need, and the trust features give everyone peace of mind.',
          author: 'Marcus Thompson',
          role: 'Community Organizer'
        }
      }
    },

                 {
      id: 8,
      title: 'Scamify',
      category: 'UI/UX Design',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['Figma', 'WireFrame', 'Prototype '],
      demoLink: 'https://www.figma.com/design/HHo0du1H6aCdeI1X68gLBJ/ScamiFy?node-id=0-1&t=mvKGKFclAO1LsuAe-1',
      codeLink: 'https://www.figma.com/design/HHo0du1H6aCdeI1X68gLBJ/ScamiFy?node-id=0-1&t=mvKGKFclAO1LsuAe-1',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },

                 {
      id: 8,
      title: 'Able-Wheels',
      category: 'UI/UX Design',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['Figma', 'WireFrame', 'Prototype '],
      demoLink: 'https://www.figma.com/design/Z1FYO6KXCVQz1oS5CSJCEN/AbleWHeels?t=mvKGKFclAO1LsuAe-1',
      codeLink: 'https://www.figma.com/design/Z1FYO6KXCVQz1oS5CSJCEN/AbleWHeels?t=mvKGKFclAO1LsuAe-1',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      featured: true
    },

    
  ];

  filteredProjects = this.projects;

  ngOnInit() {
    // Simulate loading
    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  toggleFullscreen(videoElement: HTMLVideoElement) {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if ((videoElement as any).webkitRequestFullscreen) {
      (videoElement as any).webkitRequestFullscreen();
    } else if ((videoElement as any).mozRequestFullScreen) {
      (videoElement as any).mozRequestFullScreen();
    } else if ((videoElement as any).msRequestFullscreen) {
      (videoElement as any).msRequestFullscreen();
    }
  }

  openCaseStudy(project: Project) {
    if (project.caseStudy) {
      this.selectedProject = project;
    }
  }

  closeCaseStudy() {
    this.selectedProject = null;
  }
}