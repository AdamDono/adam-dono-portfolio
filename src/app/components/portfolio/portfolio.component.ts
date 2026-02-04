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
      description: 'Scalable e-commerce platform offering dynamic product filtering, secure authentication, and a seller dashboard for managing listings.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'PostgreSQL'],
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
      description: 'Responsive movie discovery platform powered by TMDB API. Features include trailer playback, dynamic filtering, dark mode, and real-time updates.',
      tags: ['Angular 18', 'TypeScript', 'Bootstrap', 'TMDB API'],
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
      description: 'Peer-to-peer backup power rental platform enabling users to rent generators and inverters during load shedding. Features bookings, reviews, and admin controls.',
      tags: ['Angular', 'Flask', 'PostgreSQL', 'Figma'],
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
      description: 'Full-stack personal finance app combining a clean interface with a secure backend to help users track spending, plan ahead, and visualize financial trends.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://pacedebt.onrender.com/login',
      codeLink: 'https://github.com/AdamDono/pacedebt',  // Update with actual repo link
      featured: true
    },
    {
      id: 5,
      title: 'Dr Sick',
      category: 'UI/UX Design',
      description: 'A Mobile design High fidelity wireframe that lets a user login, search for doctors, and book appointments via direct message.',
      tags: ['Figma', 'Wireframe', 'Mobile Design', 'High Fidelity'],
      imageUrl: '/dr-sick.png',
      demoLink: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Scamify',
      category: 'UI/UX Design',
      description: 'A Cyber Awareness App that alerts people of recent scam trends and educates them on how to avoid being scammed.',
      tags: ['Figma', 'Cyber Awareness', 'Mobile App', 'Education'],
      imageUrl: '/scamify.png',
      demoLink: 'https://www.figma.com/design/HHo0du1H6aCdeI1X68gLBJ/ScamiFy?node-id=241-585&t=ZziyfDboNpijJ8g6-1',
      featured: true
    },
    {
      id: 7,
      title: 'AbleWheels',
      category: 'UI/UX Design',
      description: 'A mobile application design that helps people with disabilities to get easy transportation suited for their needs.',
      tags: ['Figma', 'Accessibility', 'Transportation', 'Mobile App'],
      imageUrl: '/ablewheels.png',
      demoLink: 'https://www.figma.com/design/Z1FYO6KXCVQz1oS5CSJCEN/AbleWHeels?node-id=144-1780&t=gsqfr6r4zP25foxH-1',
      featured: true
    }
  ];

  filteredProjects = this.projects;

  // Cache for safe URLs to prevent iframe reloading
  private urlCache = new Map<string, SafeResourceUrl>();

  ngOnInit() {
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
    // Check cache first
    if (this.urlCache.has(url)) {
      return this.urlCache.get(url)!;
    }

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
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);

    // Cache and return
    this.urlCache.set(url, safeUrl);
    return safeUrl;
  }
}