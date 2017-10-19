import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RutrackerService} from '../core/rutracker.service';
import * as _ from 'lodash';

declare const UIkit: any;

@Component({
  selector: 'magnet-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() toggleSearch;
  @Output() onToggleSearch = new EventEmitter<boolean>();

  public searchQuery: string;
  public searchResult;

  constructor(private rutrackerService: RutrackerService) {
  }

  public onSubmit(form) {
    this.rutrackerService.searchByTitle(form.searchQuery, result => {
      this.searchResult = _.orderBy(result, [(item) => parseInt(item.seeds), (item) => item.title], ['asc', 'desc']).reverse();

    });

    this.toggleSearch = true;

    this.onToggleSearch.emit(this.toggleSearch);

    UIkit.modal('#search-modal').hide();

    this.searchQuery = '';
  }

  ngOnInit() {
  }
}
