import {TestBed, inject} from '@angular/core/testing';

import {WebtorrentService} from './webtorrent.service';

describe('WebtorrentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebtorrentService]
    });
  });

  it('should be created', inject([WebtorrentService], (service: WebtorrentService) => {
    expect(service).toBeTruthy();
  }));
});
