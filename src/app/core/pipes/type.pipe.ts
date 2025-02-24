import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(value: string): string {
    const type: { [key: string]: string } = {
      1: 'Paisagem',
      2: 'Flor',
      3: 'Pizza',
    };

    return type[value];
  }
}
