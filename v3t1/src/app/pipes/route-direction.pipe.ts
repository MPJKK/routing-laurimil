import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeDirection'
})
export class RouteDirectionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 0){
      return 'call_received';
    } else {
      return 'call_made';
    }
  }

}
