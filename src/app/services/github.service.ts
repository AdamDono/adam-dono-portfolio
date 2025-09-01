import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // Add this method if it doesn't exist
  getUserActivity(username: string = 'AdamDono'): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/events`).pipe(
      catchError(error => {
        console.error('Error fetching GitHub activity:', error);
        return of([]);
      })
    );
  }

  // Add this method if it doesn't exist
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

  // Add this method if it doesn't exist
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  // Keep your existing methods
  getUserContributions(username: string = 'AdamDono'): Observable<number> {
    return this.getUserActivity(username).pipe(
      map(events => {
        const contributionEvents = events.filter(event => 
          ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent'].includes(event.type)
        );
        return contributionEvents.length;
      })
    );
  }
}