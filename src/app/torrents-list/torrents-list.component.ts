import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WebtorrentService} from '../core/webtorrent.service';

import * as _ from 'lodash';

@Component({
  selector: 'magnet-torrents-list',
  templateUrl: './torrents-list.component.html',
  styleUrls: ['./torrents-list.component.scss']
})
export class TorrentsListComponent implements OnInit, OnChanges {
  @Input() torrents;

  constructor(private webtorrentService: WebtorrentService) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.torrents) {
      _.forEach(this.torrents, (torrent, index) => {
        const options = {
          infoHash: torrent.infoHash,
          peerId: torrent.client.peerId,
          announce: torrent.announce,
          port: 6881
        };

        this.webtorrentService.getPeers(options);

        torrent.on('done', () => {
          console.log('Done!')
        });
      });
    }
  }
}
