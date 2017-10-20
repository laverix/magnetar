import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

declare const UIkit: any;

@Component({
  selector: 'magnet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public searchMode = false;
  public searchResultSubject: Subject<any> = new Subject();

  constructor() {
  }

  public toggleSearchMode(value: boolean) {
    this.searchMode = value;
  }

  public getSearchResult(value) {
    this.searchResultSubject.next(value);
  }

  ngOnInit() {
  }
}
