import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BytesPipe} from './bytes.pipe';
import {MillisToMinutesPipe} from './millis-to-minutes.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BytesPipe,
    MillisToMinutesPipe
  ],
  exports: [
    BytesPipe,
    MillisToMinutesPipe
  ]
})
export class SharedModule {
}
