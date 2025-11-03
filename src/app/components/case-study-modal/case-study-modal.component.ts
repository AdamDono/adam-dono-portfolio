import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-case-study-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study-modal.component.html',
  styleUrls: ['./case-study-modal.component.css']
})
export class CaseStudyModalComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
