import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebtorrentService} from './core/webtorrent.service';

declare const UIkit: any;

@Component({
  selector: 'magnet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public searchMode = false;
  public searchResultSubject: Subject<any> = new Subject();
  public torrents;

  constructor(private webtorrentService: WebtorrentService) {
  }

  public toggleSearchMode(value: boolean) {
    this.searchMode = value;
  }

  public getSearchResult(value) {
    this.searchResultSubject.next(value);
  }

  ngOnInit() {
    this.webtorrentService.onAddTorrent(() => {
      this.torrents = this.webtorrentService.getTorrents();
    });


    this.webtorrentService.onTorrentError((errors) => {
      console.log(
        errors
      );
    });
  }
}
