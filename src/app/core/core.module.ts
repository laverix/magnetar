import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebtorrentService} from './webtorrent.service';
import {RutrackerService} from './rutracker.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WebtorrentService,
    RutrackerService
  ],
  declarations: []
})
export class CoreModule {
}
