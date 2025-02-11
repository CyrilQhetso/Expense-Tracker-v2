import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySearch',
  standalone: false
})
export class CategorySearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
