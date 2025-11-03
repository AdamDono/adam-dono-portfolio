import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AnalyticsData {
  totalViews: number;
  projectViews: { [projectId: number]: number };
  pageViews: { [page: string]: number };
  uniqueVisitors: number;
  averageTimeOnSite: number;
  topProjects: { id: number; title: string; views: number }[];
  viewsByDate: { date: string; views: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly STORAGE_KEY = 'portfolio_analytics';
  private analyticsSubject = new BehaviorSubject<AnalyticsData>(this.loadAnalytics());
  private isLocalStorageAvailable = false;

  constructor() {
    this.checkLocalStorage();
    this.trackPageView('home');
  }

  private checkLocalStorage(): void {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      this.isLocalStorageAvailable = true;
    } catch (e) {
      console.warn('localStorage is not available. Analytics will not persist.');
      this.isLocalStorageAvailable = false;
    }
  }

  private loadAnalytics(): AnalyticsData {
    try {
      if (this.isLocalStorageAvailable) {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
          return JSON.parse(stored);
        }
      }
    } catch (e) {
      console.warn('Failed to load analytics from localStorage');
    }
    
    return {
      totalViews: 0,
      projectViews: {},
      pageViews: {},
      uniqueVisitors: 0,
      averageTimeOnSite: 0,
      topProjects: [],
      viewsByDate: []
    };
  }

  private saveAnalytics(data: AnalyticsData) {
    try {
      if (this.isLocalStorageAvailable) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      }
    } catch (e) {
      console.warn('Failed to save analytics to localStorage');
    }
    this.analyticsSubject.next(data);
  }

  getAnalytics(): Observable<AnalyticsData> {
    return this.analyticsSubject.asObservable();
  }

  trackPageView(page: string) {
    const data = this.analyticsSubject.value;
    data.totalViews++;
    data.pageViews[page] = (data.pageViews[page] || 0) + 1;
    
    // Track by date
    const today = new Date().toISOString().split('T')[0];
    const dateEntry = data.viewsByDate.find(v => v.date === today);
    if (dateEntry) {
      dateEntry.views++;
    } else {
      data.viewsByDate.push({ date: today, views: 1 });
    }
    
    // Keep only last 30 days
    if (data.viewsByDate.length > 30) {
      data.viewsByDate = data.viewsByDate.slice(-30);
    }
    
    this.saveAnalytics(data);
  }

  trackProjectView(projectId: number, projectTitle: string) {
    const data = this.analyticsSubject.value;
    data.projectViews[projectId] = (data.projectViews[projectId] || 0) + 1;
    
    // Update top projects
    this.updateTopProjects(data, projectId, projectTitle);
    
    this.saveAnalytics(data);
  }

  private updateTopProjects(data: AnalyticsData, projectId: number, projectTitle: string) {
    const existingProject = data.topProjects.find(p => p.id === projectId);
    
    if (existingProject) {
      existingProject.views = data.projectViews[projectId];
    } else {
      data.topProjects.push({
        id: projectId,
        title: projectTitle,
        views: data.projectViews[projectId]
      });
    }
    
    // Sort by views and keep top 10
    data.topProjects.sort((a, b) => b.views - a.views);
    data.topProjects = data.topProjects.slice(0, 10);
  }

  trackUniqueVisitor() {
    try {
      if (!this.isLocalStorageAvailable) return;
      
      const visitorKey = 'portfolio_visitor_id';
      if (!localStorage.getItem(visitorKey)) {
        const visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem(visitorKey, visitorId);
        
        const data = this.analyticsSubject.value;
        data.uniqueVisitors++;
        this.saveAnalytics(data);
      }
    } catch (e) {
      console.warn('Failed to track unique visitor');
    }
  }

  resetAnalytics() {
    const emptyData: AnalyticsData = {
      totalViews: 0,
      projectViews: {},
      pageViews: {},
      uniqueVisitors: 0,
      averageTimeOnSite: 0,
      topProjects: [],
      viewsByDate: []
    };
    this.saveAnalytics(emptyData);
  }
}
