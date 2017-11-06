import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'millisToMinutes'
})
export class MillisToMinutesPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const minutes = Math.floor(value / 60000);
    const seconds = ((value % 60000) / 1000).toFixed(0);
    const expression = parseInt(seconds, 10) < 10 ? '0' : '';

    return `${minutes}:${expression}${seconds}`;
  }

}
