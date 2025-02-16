import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../classes/transaction';

@Pipe({
  name: 'amountSearch',
  standalone: false
})
export class AmountSearchPipe implements PipeTransform {

  transform(value: Transaction[], amountSearch?: number): Transaction[] {
    
    if (!amountSearch) return value;

    let amountInString = amountSearch.toString();
    return value.filter((transaction) => transaction.amount.toString().includes(amountInString));
  }

}
