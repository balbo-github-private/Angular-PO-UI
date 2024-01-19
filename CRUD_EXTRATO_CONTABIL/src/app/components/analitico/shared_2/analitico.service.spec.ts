import { TestBed } from '@angular/core/testing';

import { analiticoService } from './analitico.service';

describe('analiticoService', () => {
  let service: analiticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(analiticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
