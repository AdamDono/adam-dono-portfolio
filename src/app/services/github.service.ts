import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserActivity() {
    return this.http.get<any[]>(`${this.apiUrl}/users/AdamDono/events`);
  }

  getEventTypeIcon(eventType: string): string {
    const icons: { [key: string]: string } = {
      'PushEvent': 'fas fa-code-commit',
      'CreateEvent': 'fas fa-plus',
      'IssuesEvent': 'fas fa-exclamation-circle',
      'PullRequestEvent': 'fas fa-code-pull-request',
      'WatchEvent': 'fas fa-star',
      'ForkEvent': 'fas fa-code-branch'
    };
    return icons[eventType] || 'fas fa-code';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }
}