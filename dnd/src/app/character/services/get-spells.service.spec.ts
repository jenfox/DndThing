import { TestBed, inject } from '@angular/core/testing';

import { GetSpellsService } from './get-spells.service';

describe('GetSpellsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSpellsService]
    });
  });

  it('should be created', inject([GetSpellsService], (service: GetSpellsService) => {
    expect(service).toBeTruthy();
  }));
});
