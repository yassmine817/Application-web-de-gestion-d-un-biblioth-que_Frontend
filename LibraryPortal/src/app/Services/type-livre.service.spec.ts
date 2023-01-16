import { TestBed } from '@angular/core/testing';

import { TypeLivreService } from './type-livre.service';

describe('TypeLivreService', () => {
  let service: TypeLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
