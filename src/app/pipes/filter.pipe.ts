import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[],
            text: string = '',
            col: string = 'title'): any[] {

    if (text === '') {
      return value;
    }

    if (!value) {
      return value;
    }

    text = text.toLocaleLowerCase();

    return value.filter((item: any[]) => item[col].toLowerCase().includes(text));
  }
}
