import { TestBed } from '@angular/core/testing';

import { CalificacionPropiedadService } from './calificacion-propiedad.service';

describe('CalificacionPropiedadService', () => {
  let service: CalificacionPropiedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionPropiedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
