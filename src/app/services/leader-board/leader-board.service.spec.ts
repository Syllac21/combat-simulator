import { TestBed } from '@angular/core/testing';
import { LeaderBoardService } from './leader-board.service';


describe('LeaderBoardService', () => {
  let service: LeaderBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
