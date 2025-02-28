import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pet } from '../../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PetServicesService {

  private petsUrl = 'assets/pets.json';

  constructor(private _httpClient: HttpClient) {}

  getPets(): Observable<any[]> {
    return this._httpClient.get<any>(this.petsUrl).pipe(
      map(response =>
        response.data.map((pet: Pet) => ({
          id: pet.id,
          name: pet.name,
          type: pet.type,
          breed: pet.breed,
          age: pet.age,
          lastVaccine: pet.lastVaccine,
          nextVaccine: pet.nextVaccine,
          owner: pet.owner.name
        }))
      )
    );
  }

  getPet(id: number): Observable<Pet | undefined> {
    return this._httpClient.get<any>(this.petsUrl).pipe(
      map(response => response.data.find((pet: any) => pet.id == id))
    );
  }
}
