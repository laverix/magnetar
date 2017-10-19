import {Component, OnInit} from '@angular/core';

declare const UIkit: any;

@Component({
  selector: 'magnet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public search = false;

  constructor() {
  }

  public onToggleSearch(event) {
    this.search = event;
  }

  ngOnInit() {
  }
}
