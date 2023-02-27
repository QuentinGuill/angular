import { TestBed } from '@angular/core/testing';

import { Erreur401interceptorService } from './erreur401interceptor.service';

describe('Erreur401interceptorService', () => {
  let service: Erreur401interceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Erreur401interceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
