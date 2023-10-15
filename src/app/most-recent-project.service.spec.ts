import { TestBed } from '@angular/core/testing';

import { MostRecentProjectService } from './most-recent-project.service';

describe('MostRecentProjectService', () => {
  let service: MostRecentProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostRecentProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
