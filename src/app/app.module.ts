import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TorrentsListComponent} from './torrents-list/torrents-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TorrentsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
