// portfolio.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../../models/project.model';
import { CaseStudyModalComponent } from '../case-study-modal/case-study-modal.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LoadingComponent, CaseStudyModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  categories = ['All', 'UI/UX Design', 'Web Application'];
  selectedCategory = 'All';
  isLoading = true;
  selectedProject: Project | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  projects: Project[] = [
    {
      id: 1,
      title: 'BuyMo E-commerce',
      category: 'Web Application',
      description: 'A comprehensive e-commerce platform with dynamic product management and secure checkout.',
      tags: ['Angular', 'Python', 'Flask', 'PostgreSQL'],
      videoUrl: 'https://youtu.be/OEtk27KLCSs?si=0NkO96RAkB1pvmyl',
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://buymo.onrender.com/',
      codeLink: 'https://github.com/AdamDono/BuyMo',
      featured: true
    },
    {
      id: 2,
      title: 'MovieBuddy App',
      category: 'Web Application',
      description: 'Interactive movie discovery platform with real-time API integrations.',
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'API'],
      videoUrl: 'https://youtu.be/gG6g58LUiXA?si=3HQtg5IAAsgEW8EI',
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://movieapi-q0fn.onrender.com/',
      codeLink: 'https://github.com/AdamDono/movieapi',
      featured: true
    },
    {
      id: 3,
      title: 'PowerRent Application',
      category: 'Web Application',
      description: 'High-performance equipment rental platform for seamless business operations.',
      tags: ['Angular', 'Bootstrap', 'Flask', 'Postman'],
      videoUrl: 'https://youtu.be/yNtJ8E_1uLE?si=6S6XFRuzPlYl8Dj5',
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://youtu.be/yNtJ8E_1uLE?si=6S6XFRuzPlYl8Dj5',
      codeLink: '#',
      featured: true,
      privateRepo: true
    },
    {
      id: 4,
      title: 'Pacedebt',
      category: 'Web Application',
      description: 'Debt management and financial planning platform for personal finance tracking.',
      tags: ['Angular', 'TypeScript', 'Firebase', 'Material UI'],
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://pacedebt.onrender.com/login',
      codeLink: 'https://github.com/AdamDono/pacedebt',  // Update with actual repo link
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Management',
      category: 'UI/UX Design',
      description: 'Unified dashboard for financial asset tracking and performance analysis.',
      tags: ['Figma', 'WireFrame', 'Prototype', 'UX Research'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      demoLink: 'https://www.figma.com/design/Gwve2tObvaz8X7JG0dWvEp/Portfolio-Management',
      featured: true,
      caseStudy: {
        problem: 'Investment firms struggled with fragmented tools and cluttered interfaces.',
        solution: 'Designed a unified system with interactive charts and streamlined workflows.',
        results: 'Task completion time reduced by 50% and onboarding time cut by 85%.',
        metrics: [
          { label: 'Workload', value: '-50%', icon: 'ph-clock' },
          { label: 'Satisfaction', value: '4.8/5', icon: 'ph-star' }
        ]
      }
    },
    {
      id: 6,
      title: 'In-Need App',
      category: 'UI/UX Design',
      description: 'Community-driven platform connecting volunteers with local needs.',
      tags: ['Figma', 'Mobile UI', 'Social Impact'],
      imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
      demoLink: 'https://www.figma.com/design/I4gGd7rddAv5avkhXgskz6/In-Need',
      featured: true,
      caseStudy: {
        problem: 'Lack of centralized platform for local community aid and volunteer matching.',
        solution: 'Mobile-first platform with location matching and verified profiles.',
        results: 'Over 5,000 active users and 2,500+ successful connections.',
        metrics: [
          { label: 'Users', value: '5k+', icon: 'ph-users' },
          { label: 'Impact', value: 'High', icon: 'ph-heart' }
        ]
      }
    }
  ];

  filteredProjects = this.projects;

  ngOnInit() {
    // Generate safe URLs once on init to prevent iframe reloading during change detection
    this.projects.forEach(project => {
      if (project.videoUrl && this.isYouTubeUrl(project.videoUrl)) {
        project.safeVideoUrl = this.getYouTubeEmbedUrl(project.videoUrl);
      }
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 800);
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === category);
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

  togglePlayPause(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  isVideoPlaying(video: HTMLVideoElement): boolean {
    return !video.paused;
  }

  playVideoFullscreen(event: Event, video: HTMLVideoElement) {
    event.stopPropagation();

    // Request fullscreen
    if (video.requestFullscreen) {
      video.requestFullscreen().then(() => {
        // Play video in HD after entering fullscreen
        video.play();
      }).catch(err => {
        console.log('Fullscreen request failed:', err);
        // If fullscreen fails, just play the video
        video.play();
      });
    } else {
      // Fallback: just play if fullscreen not supported
      video.play();
    }
  }

  isYouTubeUrl(url: string): boolean {
    // Check for both short (youtu.be) and long (youtube.com) formats
    return /youtu\.be\/|youtube\.com\//.test(url);
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    let videoId = '';

    // Robust regex to extract ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      videoId = match[2];
    } else {
      console.warn('Could not extract video ID from:', url);
    }

    // Restored exact params from reference commit: autoplay=1&mute=1&loop=1&playlist={videoId} + HD quality
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&vq=hd720`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}