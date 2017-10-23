import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WebtorrentService} from '../core/webtorrent.service';

declare const Buffer: any;

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
      console.log(
        this.torrents[0]
      );

      const options = {
        infoHash: this.torrents[0].infoHash, // hex string or Buffer
        peerId: this.torrents[0].client.peerId, // hex string or Buffer
        announce: this.torrents[0].announce, // list of tracker server urls
        port: 6881 // torrent client port, (in browser, optional)
      };

      this.webtorrentService.getPeers(options);

      setInterval(() => {
        console.log('total downloaded: ' + this.torrents[0].downloaded);
        console.log('download speed: ' + this.torrents[0].downloadSpeed);
        console.log('progress: ' + this.torrents[0].progress);
      }, 1000);
    }
  }
}
