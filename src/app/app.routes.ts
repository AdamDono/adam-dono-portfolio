import { Routes } from '@angular/router';
import { AnalyticsDashboardComponent } from './components/analytics-dashboard/analytics-dashboard.component';

export const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsDashboardComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
