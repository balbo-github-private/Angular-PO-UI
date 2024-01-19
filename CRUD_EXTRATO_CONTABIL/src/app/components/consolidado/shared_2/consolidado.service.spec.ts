import { TestBed } from '@angular/core/testing';

import { consolidadoService } from './consolidado.service';

describe('ConsolidadoService', () => {
  let service: consolidadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(consolidadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
