import { TestBed, inject } from '@angular/core/testing';

import { GetCharacterService } from './get-character.service';

describe('GetCharacterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCharacterService]
    });
  });

  it('should be created', inject([GetCharacterService], (service: GetCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
