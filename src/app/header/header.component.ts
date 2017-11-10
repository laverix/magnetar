import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'magnet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() searchMode;
  @Output() toggleSearchModeEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  }

  toggleSearchMode() {
    this.toggleSearchModeEvent.emit(!this.searchMode);

    return false;
  }
}
