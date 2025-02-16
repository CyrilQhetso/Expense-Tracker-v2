import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../classes/transaction';

@Pipe({
  name: 'categorySearch',
  standalone: false
})
export class CategorySearchPipe implements PipeTransform {

  transform(value: Transaction[], categorySearch: string): Transaction[] {
    if (!categorySearch) return value;
    
    categorySearch = categorySearch.toLowerCase();
    return value.filter((transaction) => transaction.category.toLowerCase().includes(categorySearch));
  }

}
