import { TestBed } from '@angular/core/testing';

import { CalificacionArrendatarioService } from './calificacion-arrendatario.service';

describe('CalificacionArrendatarioService', () => {
  let service: CalificacionArrendatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionArrendatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
