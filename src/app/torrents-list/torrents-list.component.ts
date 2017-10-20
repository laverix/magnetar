import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {WebtorrentService} from '../core/webtorrent.service';
import * as _ from 'lodash';

@Component({
  selector: 'magnet-torrents-list',
  templateUrl: './torrents-list.component.html',
  styleUrls: ['./torrents-list.component.scss']
})
export class TorrentsListComponent implements OnInit {
  public torrents = [];

  constructor(private webtorrentService: WebtorrentService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.webtorrentService.onAddTorrent(() => {
      this.torrents = _.cloneDeep(this.webtorrentService.getTorrents());
      this.changeDetectorRef.detectChanges();
    });
  }
}
