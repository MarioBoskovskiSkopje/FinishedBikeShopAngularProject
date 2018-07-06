import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'removeduplicates5'
})
export class Removeduplicates5Pipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'ramSize');


    }
    return value
  }
}


