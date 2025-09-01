import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github-activity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './github-activity.component.html',
  styleUrls: ['./github-activity.component.css']
})
export class GithubActivityComponent implements OnInit {
  recentActivity: any[] = [];
  contributionsCount: number = 0;
  isLoading: boolean = true;
  squares: any[] = [];
  tooltipText: string = '';
  tooltipVisible: boolean = false;
  tooltipPosition = { top: '0', left: '0' };
  selectedYear: number = new Date().getFullYear();
  years: number[] = [];
  username: string = 'torvalds'; // Default username
  intensityLevel: number = 1; // For adjusting contribution intensity

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.generateYearOptions();
    this.fetchGithubActivity();
    this.generateContributionSquares();
  }

  generateYearOptions() {
    const currentYear = new Date().getFullYear();
    this.years = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];
  }

  onYearChange() {
    this.isLoading = true;
    this.generateContributionSquares();
  }

  onUsernameChange() {
    if (this.username.trim()) {
      this.isLoading = true;
      this.fetchGithubActivity();
      this.generateContributionSquares();
    }
  }

  fetchGithubActivity() {
    this.githubService.getUserActivity(this.username).subscribe({
      next: (activity: any[]) => {
        this.recentActivity = activity.slice(0, 5);
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching GitHub activity:', error);
        this.recentActivity = [];
        this.isLoading = false;
      }
    });
  }

  generateContributionSquares() {
    const totalSquares = 364; // 52 weeks * 7 days
    this.squares = [];
    
    // Adjust data based on selected year and intensity
    const yearMultiplier = this.selectedYear === new Date().getFullYear() ? 1 : 
                          this.selectedYear === new Date().getFullYear() - 1 ? 0.7 : 
                          this.selectedYear === new Date().getFullYear() - 2 ? 0.4 : 0.2;
    
    const intensityMultiplier = this.intensityLevel;

    let totalContributions = 0;
    
    for (let i = 0; i < totalSquares; i++) {
      // Create a more realistic contribution pattern
      // More contributions on weekdays, less on weekends
      const date = new Date();
      date.setDate(date.getDate() - (totalSquares - i));
      const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
      
      // Base probability based on day of week
      let baseProbability = 0.4;
      if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Weekdays
        baseProbability = 0.7;
      }
      
      // Adjust probability based on intensity
      const adjustedProbability = baseProbability * intensityMultiplier;
      
      const rand = Math.random();
      let contributionCount = 0;
      
      if (rand < adjustedProbability * 0.4) {
        // No contributions
        contributionCount = 0;
      } else if (rand < adjustedProbability * 0.7) {
        // Low contributions (1-2)
        contributionCount = Math.floor(Math.random() * 2) + 1;
      } else if (rand < adjustedProbability * 0.85) {
        // Medium contributions (3-5)
        contributionCount = Math.floor(Math.random() * 3) + 3;
      } else if (rand < adjustedProbability * 0.95) {
        // High contributions (6-10)
        contributionCount = Math.floor(Math.random() * 5) + 6;
      } else {
        // Very high contributions (11-20)
        contributionCount = Math.floor(Math.random() * 10) + 11;
      }
      
      // Apply year multiplier
      contributionCount = Math.floor(contributionCount * yearMultiplier);
      
      this.squares.push({
        date: new Date(date),
        count: contributionCount
      });
      
      totalContributions += contributionCount;
    }
    
    // Calculate total contributions
    this.contributionsCount = totalContributions;
    this.isLoading = false;
  }

  getSquareColor(contributionCount: number): string {
    if (contributionCount === 0) return 'l0';
    if (contributionCount <= 2) return 'l1';
    if (contributionCount <= 5) return 'l2';
    if (contributionCount <= 10) return 'l3';
    return 'l4';
  }

  showTooltip(event: any, square: any) {
    if (square.count > 0) {
      // Get coordinates from either mouse or touch event
      let clientX, clientY;
      
      if (event instanceof MouseEvent) {
        clientX = event.clientX;
        clientY = event.clientY;
      } else if (event instanceof TouchEvent && event.touches.length > 0) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        return; // Invalid event
      }
      
      const dateStr = square.date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
      
      this.tooltipText = `${square.count} contribution${square.count !== 1 ? 's' : ''} on ${dateStr}`;
      this.tooltipVisible = true;
      this.tooltipPosition = {
        top: (clientY - 50) + 'px',
        left: (clientX - 80) + 'px'
      };
    }
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }

  getEventIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'PushEvent': 'fas fa-code-commit',
      'CreateEvent': 'fas fa-plus',
      'IssuesEvent': 'fas fa-exclamation-circle',
      'PullRequestEvent': 'fas fa-code-pull-request',
      'WatchEvent': 'fas fa-star',
      'ForkEvent': 'fas fa-code-branch',
      'ReleaseEvent': 'fas fa-tag',
      'DeleteEvent': 'fas fa-trash',
      'GollumEvent': 'fas fa-book',
      'MemberEvent': 'fas fa-user-plus',
      'PublicEvent': 'fas fa-users'
    };
    return icons[type] || 'fas fa-code';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  adjustIntensity(direction: number) {
    // Adjust intensity level (clamped between 0.5 and 2)
    this.intensityLevel = Math.max(0.5, Math.min(2, this.intensityLevel + (direction * 0.2)));
    
    // Regenerate squares with new intensity
    this.isLoading = true;
    setTimeout(() => {
      this.generateContributionSquares();
    }, 300);
  }
}