import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RutrackerService} from '../core/rutracker.service';
import * as _ from 'lodash';

declare const UIkit: any;

@Component({
  selector: 'magnet-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  @Input() searchMode;
  @Output() toggleSearchModeEvent = new EventEmitter<boolean>();
  @Output() searchResultEvent = new EventEmitter<boolean>();

  public searchQuery: string;
  public searchResult;

  constructor(private rutrackerService: RutrackerService) {
  }

  public search(form) {
    this.rutrackerService.searchByTitle(form.searchQuery, result => {
      this.searchResult = _.orderBy(result, [(item) => parseInt(item.seeds, 10), (item) => item.title], ['asc', 'desc']).reverse();

      this.searchResultEvent.emit(this.searchResult);
    });

    this.searchMode = true;

    this.toggleSearchModeEvent.emit(this.searchMode);

    UIkit.modal('#search-modal').hide();

    this.searchQuery = '';
  }

  ngOnInit() {
  }
}
