import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'removeduplicates6'
})
export class Removeduplicates6Pipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'genre');


    }
    return value
  }

}
