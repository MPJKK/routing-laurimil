import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piippu'
})
export class PiippuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 0){
      return 'coming';
    } else {
      return 'going';
    }
  }

}
