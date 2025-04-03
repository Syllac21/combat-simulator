import { TestBed } from '@angular/core/testing';
import { CharacterRankingService } from './character-ranking.service';


describe('CharacterRankingService', () => {
  let service: CharacterRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
