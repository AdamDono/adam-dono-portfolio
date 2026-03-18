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
      id: 8,
      title: 'PowerRent Design',
      category: 'UI/UX Design',
      description: 'Stay Powered, Anytime, Anywhere! A peer-to-peer platform for renting backup power solutions (generators, inverters, and battery packs) during load shedding.',
      tags: ['Figma', 'UI/UX Design', 'User Research', 'Mobile App'],
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://www.figma.com/design/96Xn1G5BuppT2wNgfRDyjA/PowerRent?t=XFdhYV8yr8l8W7Iq-0',
      featured: true,
      caseStudy: {
        problem: 'Persistent load shedding in South Africa disrupts daily life, significantly impacting productivity for remote workers, students, and small businesses who lack affordable backup power.',
        solution: 'A shared economy model that allows individuals to rent out backup equipment, maximizing the use of existing resources and reducing downtime during power outages.',
        results: 'Designed a comprehensive lender-renter ecosystem that empowers professionals to maintain productivity from home while creating a new revenue stream for equipment owners.',
        metrics: [
          { label: 'Uptime', value: '100%', icon: 'ph-lightning' },
          { label: 'Market', value: 'SA', icon: 'ph-globe' }
        ]
      }
    },
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
      id: 13,
      title: 'Movie Buddy Design',
      category: 'UI/UX Design',
      description: 'A Netflix-inspired movie discovery platform design, focusing on cinematic immersion, content-heavy layouts, and a seamless cross-device browsing experience.',
      tags: ['Figma', 'Streaming UI', 'Netflix Inspired', 'Desktop/Mobile Design'],
      imageUrl: '/Movie Buddy Design.png',
      demoLink: 'https://www.figma.com/design/Dx3MugRwIl1Es5t7UCQ4VV/Movie-Buddy-Design?node-id=0-1&t=H9zP8P2OwrbZFJsM-1',
      featured: true,
      caseStudy: {
        problem: 'Content discovery in streaming apps can often feel overwhelming, with users spending more time browsing than actually watching.',
        solution: 'Created a Netflix-inspired design that prioritizes high-impact visuals and intuitive categorization, mirroring the "binge-watching" experience users already love.',
        results: 'A highly immersive interface that maximizes content engagement while providing clear, familiar navigation pathways.',
        metrics: [
          { label: 'Style', value: 'Cinematic', icon: 'ph-video' },
          { label: 'Flow', value: 'Direct', icon: 'ph-arrow-right' }
        ]
      }
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
      id: 9,
      title: 'Luxe E-commerce',
      category: 'UI/UX Design',
      description: 'A minimalist desktop e-commerce design focused on high-end fashion, featuring clean lines, spatial awareness, and a premium shopping experience.',
      tags: ['Figma', 'Desktop Design', 'E-commerce', 'Minimalist UI'],
      imageUrl: '/Luxe E-commerce.png',
      demoLink: 'https://www.figma.com/proto/RptJUiQ0vwNuvcb6ck7u8a/Ecom?node-id=2301-4&t=XFdhYV8yr8l8W7Iq-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      featured: true,
      caseStudy: {
        problem: 'Current high-end fashion e-commerce platforms often feel cluttered, detracting from the product\'s premium appeal and overwhelming the user.',
        solution: 'Implemented a minimalist design philosophy using ample white space, refined typography, and a grid-based layout to create a sophisticated, gallery-like shopping experience.',
        results: 'Designed a high-conversion desktop interface that elevates brand perception and provides a seamless, distraction-free path to purchase.',
        metrics: [
          { label: 'Focus', value: 'High', icon: 'ph-eye' },
          { label: 'Style', value: 'Minimal', icon: 'ph-palette' }
        ]
      }
    },
    {
      id: 3,
      title: 'PowerRent Application',
      category: 'Web Application',
      description: 'Peer-to-peer backup power rental platform enabling users to rent generators and inverters during load shedding. Features bookings, reviews, and admin controls.',
      tags: ['Angular', 'Flask', 'PostgreSQL', 'Figma'],
      videoUrl: 'https://youtu.be/yNtJ8E_1uLE?si=6S6XFRuzPlYl8Dj5',
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://powerrent.onrender.com/',
      codeLink: '#',
      featured: true,
      privateRepo: true
    },
    {
      id: 12,
      title: 'NeroWallet',
      category: 'UI/UX Design',
      description: 'A premium Web3 wallet design focusing on a "human-centric" approach to decentralized finance, with warm visuals and simplified transaction flows.',
      tags: ['Figma', 'Web3', 'Mobile UI', 'FinTech'],
      imageUrl: '/NeroWallet.png',
      demoLink: 'https://www.figma.com/design/dA42ujf4s5BhLSdkEnzDD1/nerowallet?node-id=129-200&t=H9zP8P2OwrbZFJsM-0',
      featured: true,
      caseStudy: {
        problem: 'Navigating the complexities of decentralized finance remains a significant barrier for mainstream users, with many wallet interfaces feeling impersonal and intimidating.',
        solution: 'Designed a more "human" approach to Web3 with the NeroWallet, focusing on warm visual elements and simplified transaction flows without compromising on security.',
        results: 'A premium mobile experience that feels more like a lifestyle app than a technical tool, encouraging broader adoption of crypto assets.',
        metrics: [
          { label: 'UX', value: 'Human', icon: 'ph-user-focus' },
          { label: 'Trust', value: 'Verified', icon: 'ph-check-circle' }
        ]
      }
    },
    {
      id: 4,
      title: 'Pacedebt',
      category: 'Web Application',
      description: 'Full-stack personal finance app combining a clean interface with a secure backend to help users track spending, plan ahead, and visualize financial trends.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      imageUrl: '/profile-pic.jpg',
      demoLink: 'https://pacedebt.onrender.com/login',
      codeLink: 'https://github.com/AdamDono/pacedebt',
      featured: true
    },
    {
      id: 10,
      title: 'FocusFlow Todo',
      category: 'UI/UX Design',
      description: 'A minimalist mobile task management application designed to help users streamline their daily productivity through a clean and distraction-free interface.',
      tags: ['Figma', 'Mobile UI', 'Productivity', 'User Experience'],
      imageUrl: '/FocusFlow Todo.png',
      demoLink: 'https://www.figma.com/design/7PSx9EVQbnaziKnj49Fi3i/Todo-List-App?node-id=52-89&t=3DwFCx41SzoNARmZ-1',
      featured: true,
      caseStudy: {
        problem: 'Many productivity apps are overloaded with complex features, making the simple act of tracking daily tasks feel overwhelming and tedious for casual users.',
        solution: 'Designed a minimalist task manager that prioritizes essential interactions, utilizing a soft color palette and a clear visual hierarchy to reduce cognitive load.',
        results: 'Created a cohesive mobile experience that simplifies task entry and management, helping users stay focused on their immediate goals without unnecessary distractions.',
        metrics: [
          { label: 'UI', value: 'Clean', icon: 'ph-sparkle' },
          { label: 'UX', value: 'Intuitive', icon: 'ph-fingers-crossed' }
        ]
      }
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
      demoLink: 'https://www.figma.com/design/HHo0du1H6aCdeI1X68gLBJ/ScamiFy?node-id=241-585&t=Z9t0jzCLbU9R2tBN-0',
      featured: true
    },
    {
      id: 7,
      title: 'AbleWheels',
      category: 'UI/UX Design',
      description: 'A mobile application design that helps people with disabilities to get easy transportation suited for their needs.',
      tags: ['Figma', 'Accessibility', 'Transportation', 'Mobile App'],
      imageUrl: '/ablewheels.png',
      demoLink: 'https://www.figma.com/design/Z1FYO6KXCVQz1oS5CSJCEN/AbleWHeels?node-id=144-1780',
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