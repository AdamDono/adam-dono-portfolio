import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resumeUrl: SafeResourceUrl;
  resumePath = 'cv-adam-dono.pdf'; // PDF in public folder
  showViewer = false;

  constructor(private sanitizer: DomSanitizer) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resumePath);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumePath;
    link.download = 'cv-adam-dono.pdf';
    link.click();
  }

  viewOnline() {
    this.showViewer = true;
  }

  closeViewer() {
    this.showViewer = false;
  }

  openInNewTab() {
    window.open(this.resumePath, '_blank');
  }
}
