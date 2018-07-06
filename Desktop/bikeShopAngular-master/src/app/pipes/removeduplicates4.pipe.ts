import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'removeduplicates4'
})
export class Removeduplicates4Pipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'shifter');


    }
    return value
  }
}
