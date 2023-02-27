import { TestBed } from '@angular/core/testing';

import { UService } from './uservice.service';

describe('UserviceService', () => {
  let service: UService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
