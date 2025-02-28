import { TestBed } from '@angular/core/testing';

import { PetServicesService } from './pet-services.service';

describe('PetServicesService', () => {
  let service: PetServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
