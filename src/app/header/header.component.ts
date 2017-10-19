import {Component, OnInit} from '@angular/core';
import {WebtorrentService} from '../core/webtorrent.service';
import {RutrackerService} from '../core/rutracker.service';

@Component({
  selector: 'magnet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private webtorrentService: WebtorrentService, private rutrackerService: RutrackerService) {
  }

  ngOnInit() {
  }

}
