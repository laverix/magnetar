import { TestBed, inject } from '@angular/core/testing';

import { RutrackerService } from './rutracker.service';

describe('RutrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutrackerService]
    });
  });

  it('should be created', inject([RutrackerService], (service: RutrackerService) => {
    expect(service).toBeTruthy();
  }));
});
