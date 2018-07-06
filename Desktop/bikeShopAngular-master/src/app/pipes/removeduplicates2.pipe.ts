import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'removeduplicates2'
})
export class Removeduplicates2Pipe implements PipeTransform {

  transform(value: any): any {




    if (value !== undefined && value !== null) {
      return _.uniqBy(value, 'wheels');


    }





    return value;

  }
}
