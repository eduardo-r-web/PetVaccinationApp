import { Component, Input, input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Pet } from '../../interfaces/api-response.interface';
import { ActivatedRoute } from '@angular/router';
import { PetServicesService } from '../../services/pet-services/pet-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.css'
})
export default class PetProfileComponent {
  pet: any;
  loading = true;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _petServicesService: PetServicesService
  ){
    this._activatedRoute.params.subscribe( params => {
      this._petServicesService.getPet( params['id'] )
        .subscribe( pet => {
          this.pet = pet;
          this.loading = false
        } );
    });
  }
}
