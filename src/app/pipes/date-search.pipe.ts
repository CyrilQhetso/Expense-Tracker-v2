import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSearch',
  standalone: false
})
export class DateSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
