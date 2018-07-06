import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'removeduplicates1'
})
export class Removeduplicates1Pipe implements PipeTransform {

  transform(value: any): any {




    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'material');


    }





    return value;

  }
}
