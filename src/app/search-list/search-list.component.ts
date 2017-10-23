import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {RutrackerService} from '../core/rutracker.service';
import {WebtorrentService} from '../core/webtorrent.service';

import * as _ from 'lodash';

declare const nodeRequire: any;

@Component({
  selector: 'magnet-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() searchResultSubject: Subject<any>;
  @Input() searchMode: boolean;
  @Output() toggleSearchModeEvent = new EventEmitter<boolean>();

  public searchResult = [];

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private rutrackerService: RutrackerService,
              private webtorrentService: WebtorrentService) {

  }

  public download(item) {
    this.rutrackerService.downloadTorrent(item.id, (stream) => {
      this.webtorrentService.downloadFileFromWriteStream(item.id, stream, () => {});

      // this.webtorrentService.seedFile(stream, item.title, () => {});

      this.toggleSearchModeEvent.emit(this.searchMode = false);
    });



  }

  ngOnInit() {
    this.searchResultSubject.subscribe((event) => {
      this.searchResult = _.cloneDeep(event);
      this.changeDetectorRef.detectChanges();
    });
  }
}
