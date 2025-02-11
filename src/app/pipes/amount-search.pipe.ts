import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountSearch',
  standalone: false
})
export class AmountSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
