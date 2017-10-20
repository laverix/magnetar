import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'magnet-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() searchResultSubject: Subject<any>;
  public searchResult = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.searchResultSubject.subscribe((event) => {
      this.searchResult = event;
      this.changeDetectorRef.detectChanges();
    });
  }
}
