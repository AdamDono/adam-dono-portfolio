import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // MUST import appConfig
import { AppComponent } from './app/app.component';

// MUST use appConfig here
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));