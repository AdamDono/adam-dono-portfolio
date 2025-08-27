import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-activity.component.html',
  styleUrls: ['./github-activity.component.css']
})
export class GithubActivityComponent implements OnInit {
  recentActivity: any[] = [];
  isLoading = true;

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.fetchGithubActivity();
  }

  fetchGithubActivity() {
    this.githubService.getUserActivity().subscribe({
      next: (activity) => {
        this.recentActivity = activity.slice(0, 5);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching GitHub activity:', error);
        this.isLoading = false;
      }
    });
  }

  getEventIcon(type: string): string {
    return this.githubService.getEventTypeIcon(type);
  }

  formatDate(date: string): string {
    return this.githubService.formatDate(date);
  }
}