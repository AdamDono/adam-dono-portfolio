import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
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