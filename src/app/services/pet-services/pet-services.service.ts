import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PetServicesService {

  private petsUrl = 'assets/pets.json';

  constructor(private _httpClient: HttpClient) {}

  getPets(): Observable<any[]> {
    return this._httpClient.get<ApiResponse>(this.petsUrl).pipe(
      map(response =>
        response.data.map(mascota => ({
          id: mascota.id,
          name: mascota.name,
          type: mascota.type,
          breed: mascota.breed,
          age: mascota.age,
          lastVaccine: mascota.lastVaccine,
          nextVaccine: mascota.nextVaccine,
          owner: mascota.owner.name
        }))
      )
    );
  }
}
