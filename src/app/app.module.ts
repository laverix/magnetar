import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TorrentsListComponent} from './torrents-list/torrents-list.component';
import {CoreModule} from './core/core.module';
import {SearchListComponent} from './search-list/search-list.component';

import {FormsModule} from '@angular/forms';
import {SearchModalComponent} from './search-modal/search-modal.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TorrentsListComponent,
    SearchListComponent,
    SearchModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
