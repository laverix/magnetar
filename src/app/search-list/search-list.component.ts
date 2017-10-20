import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {RutrackerService} from '../core/rutracker.service';
import {WebtorrentService} from '../core/webtorrent.service';

declare const nodeRequire: any;

@Component({
  selector: 'magnet-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() searchResultSubject: Subject<any>;
  public searchResult = [];
  public fs;

  constructor(private changeDetectorRef: ChangeDetectorRef, private rutrackerService: RutrackerService, private webtorrentService: WebtorrentService) {
    this.fs = nodeRequire('fs');
  }

  public download(id) {
    this.rutrackerService.downloadTorrent(id, (response) => {
      const file = `${id}.torrent`;
      const writeStream = this.fs.createWriteStream(file);

      response.pipe(writeStream);

      writeStream.on('finish', (re) => {
        this.webtorrentService.seedFile(file, (res) => {
          console.log(res);
        });
      });
    });
  }

  ngOnInit() {
    this.searchResultSubject.subscribe((event) => {
      this.searchResult = event;
      this.changeDetectorRef.detectChanges();
    });
  }
}
