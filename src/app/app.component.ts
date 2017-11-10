import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebtorrentService} from './core/webtorrent.service';
import {PersistenceService} from './core/persistence.service';

declare const UIkit: any;

import * as _ from 'lodash';

@Component({
  selector: 'magnet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public searchMode = false;
  public searchResultSubject: Subject<any> = new Subject();
  public torrents;

  constructor(private webtorrentService: WebtorrentService, private persistenceService: PersistenceService) {
  }

  public toggleSearchMode(value: boolean) {
    this.searchMode = value;
  }

  public getSearchResult(value) {
    this.searchResultSubject.next(value);
  }

  public restoreTorrentsFromStore() {
    _.forEach(this.persistenceService.getStore(), (value, key) => {
      this.webtorrentService.addByMagnetURI(value.magnetURI, value, () => {
      });
    });
  }

  ngOnInit() {
    this.torrents = _.values(this.persistenceService.getStore());

    this.restoreTorrentsFromStore();

    this.webtorrentService.onAddTorrent(() => {
      this.torrents = this.webtorrentService.getTorrents();

      _.forEach(this.torrents, (value, key) => {
        this.persistenceService.set(value.infoHash, _.pick(value, ['infoHash', 'magnetURI', 'path', 'name']));
      });
    });

    this.webtorrentService.onTorrentError((errors) => {
      console.log(errors);
    });
  }
}
