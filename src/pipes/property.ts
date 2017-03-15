import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Property pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'property'
})
@Injectable()
export class Property {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: any, args: string[]) {
    let filter = args[0].toLocaleLowerCase();
    return filter ? value.filter(property=> property.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
  }
}
