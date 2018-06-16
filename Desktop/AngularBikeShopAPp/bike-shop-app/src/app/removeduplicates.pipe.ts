import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
@Pipe({
    name: 'removeduplicates'
})
export class RemoveduplicatesPipe implements PipeTransform{
   transform(value: Array<string>):any{

        let arr = ['model','material','kind'];
    
        if(value!== undefined && value!== null){
            return  _.uniqBy(value, 'model');

        
        }

      
       
       
        return value;
    }




}