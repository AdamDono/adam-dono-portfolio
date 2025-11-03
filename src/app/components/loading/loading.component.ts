import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input() type: 'spinner' | 'skeleton' | 'dots' = 'spinner';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
}
