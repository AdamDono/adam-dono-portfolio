import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.services = this.dataService.getServices();
  }
}