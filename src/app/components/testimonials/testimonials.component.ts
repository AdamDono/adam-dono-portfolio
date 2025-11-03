import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../models/testimonial.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  currentIndex = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.testimonials = this.dataService.getTestimonials();
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }
}
