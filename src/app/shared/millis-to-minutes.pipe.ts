import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'millisToMinutes'
})
export class MillisToMinutesPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const minutes = Math.floor(value / 60000) || 0;
    const seconds = parseInt(((value % 60000) / 1000).toFixed(0), 10) || 0;
    const expression = seconds < 10 ? '0' : '';

    return `${!isFinite(minutes) ? 0 : minutes}:${expression}${seconds}`;
  }

}
