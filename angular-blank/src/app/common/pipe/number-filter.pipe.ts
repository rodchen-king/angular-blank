import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFilter'
})
export class NumberFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + 1;
  }

}
