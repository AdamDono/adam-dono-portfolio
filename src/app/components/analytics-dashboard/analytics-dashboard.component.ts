import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnalyticsService, AnalyticsData } from '../../services/analytics.service';

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.css']
})
export class AnalyticsDashboardComponent implements OnInit {
  analytics: AnalyticsData | null = null;
  isAuthenticated = false;
  password = '';
  showPassword = false;
  Object = Object; // Make Object available in template
  
  // Simple password protection - in production, use proper authentication
  private readonly ADMIN_PASSWORD = 'admin123'; // Change this!

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('analytics_auth');
    if (authStatus === 'true') {
      this.isAuthenticated = true;
      this.loadAnalytics();
    }
  }

  authenticate() {
    if (this.password === this.ADMIN_PASSWORD) {
      this.isAuthenticated = true;
      sessionStorage.setItem('analytics_auth', 'true');
      this.loadAnalytics();
    } else {
      alert('Incorrect password');
    }
  }

  private loadAnalytics() {
    this.analyticsService.getAnalytics().subscribe(data => {
      this.analytics = data;
    });
  }

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem('analytics_auth');
    this.password = '';
  }

  resetAnalytics() {
    if (confirm('Are you sure you want to reset all analytics data?')) {
      this.analyticsService.resetAnalytics();
    }
  }

  getPageViewsArray(): { page: string; views: number }[] {
    if (!this.analytics) return [];
    return Object.entries(this.analytics.pageViews).map(([page, views]) => ({
      page,
      views: views as number
    })).sort((a, b) => b.views - a.views);
  }

  getRecentViews(): { date: string; views: number }[] {
    if (!this.analytics) return [];
    return this.analytics.viewsByDate.slice(-7).reverse();
  }
}
