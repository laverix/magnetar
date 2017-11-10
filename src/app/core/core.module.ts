import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebtorrentService} from './webtorrent.service';
import {RutrackerService} from './rutracker.service';
import {PersistenceService} from './persistence.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    WebtorrentService,
    RutrackerService,
    PersistenceService
  ],
  declarations: []
})
export class CoreModule {
}
