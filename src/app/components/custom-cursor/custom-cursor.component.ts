import { Component ,OnInit,HostListener} from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css'
})
export class CustomCursorComponent implements OnInit {
  cursorX = 0;
  cursorY = 0;
  cursorFollowX = 0;
  cursorFollowY = 0;
  isPointer = false;
  isHidden = false;

  ngOnInit() {
    this.animateCursor();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.isHidden = false;
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.isHidden = true;
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Check if element is clickable
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.onclick !== null || 
        target.classList.contains('clickable') || target.style.cursor === 'pointer') {
      this.isPointer = true;
    } else {
      this.isPointer = false;
    }
  }

  animateCursor() {
    requestAnimationFrame(() => {
      const speed = 0.15;
      const dx = this.cursorX - this.cursorFollowX;
      const dy = this.cursorY - this.cursorFollowY;
      
      this.cursorFollowX += dx * speed;
      this.cursorFollowY += dy * speed;
      
      this.animateCursor();
    });
  }
}