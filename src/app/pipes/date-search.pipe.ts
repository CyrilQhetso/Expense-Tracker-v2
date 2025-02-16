import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../classes/transaction';
import { Data } from '@angular/router';

@Pipe({
  name: 'dateSearch',
  standalone: false
})
export class DateSearchPipe implements PipeTransform {

  transform(value: Transaction[], dateFromSearch?: Date, dateToSearch?: Date): Transaction[] {
    if (!dateFromSearch || !dateToSearch) return value;

    return value.filter(transaction => {
      const tractionDate = new Date(transaction.date);
      return tractionDate >= new Date(dateFromSearch) && tractionDate <= new Date(dateToSearch);
    });
  }

}
