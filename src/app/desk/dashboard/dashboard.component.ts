import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { PetServicesService } from '../../services/pet-services/pet-services.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ MatTableModule, MatButtonModule, MatIconModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'breed', 'age', 'lastVaccine', 'nextVaccine', 'owner', 'action'];
  dataSource: any;

  constructor(
    private _router: Router,
    private _petServicesService: PetServicesService
  ) {}
  
  ngOnInit(): void {
    this.dataSource = this._petServicesService.getPets();
  }

  redirectTo(): void {
    this._router.navigate(['/desk/pet-form']);
  }

  view(id: number) {

  }
}
