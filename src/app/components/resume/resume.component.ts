import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isPreviewOpen = false;
  resumeUrl = '/cv-adam-dono.pdf'; // Path served from public folder

  openPreview() {
    this.isPreviewOpen = true;
  }

  closePreview() {
    this.isPreviewOpen = false;
  }
}
