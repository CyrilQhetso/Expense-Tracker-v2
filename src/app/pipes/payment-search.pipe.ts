import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../classes/transaction';

@Pipe({
  name: 'paymentSearch',
  standalone: false
})
export class PaymentSearchPipe implements PipeTransform {

  transform(value: Transaction[], paymentSearch: string): Transaction[] {
    if (!paymentSearch) return value;

    paymentSearch = paymentSearch.toLowerCase();
    return value.filter((transaction) => transaction.paymentMethod.toLowerCase().includes(paymentSearch));
  }

}
