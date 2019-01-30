import { TestBed } from '@angular/core/testing';

import { FilmFavorisService } from './film-favoris.service';

describe('FilmFavorisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmFavorisService = TestBed.get(FilmFavorisService);
    expect(service).toBeTruthy();
  });
});
