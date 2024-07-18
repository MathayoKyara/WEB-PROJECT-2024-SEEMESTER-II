import { TestBed } from '@angular/core/testing';

import { RegistrationServices } from './registration/registration.service';

describe('RegistrationService', () => {
  let service: RegistrationServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
