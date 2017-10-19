import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';
import {WebtorrentService} from '../core/webtorrent.service';
import {RutrackerService} from '../core/rutracker.service';

@Component({
  selector: 'magnet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() search;
  @Output() onToggleSearch = new EventEmitter<boolean>();

  constructor(private webtorrentService: WebtorrentService, private rutrackerService: RutrackerService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  }

  toggleSearch() {
    this.search = !this.search;

    this.onToggleSearch.emit(this.search);

    return false;
  }
}
