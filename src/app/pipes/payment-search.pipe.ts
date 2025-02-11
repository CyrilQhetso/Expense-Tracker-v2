import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentSearch',
  standalone: false
})
export class PaymentSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
