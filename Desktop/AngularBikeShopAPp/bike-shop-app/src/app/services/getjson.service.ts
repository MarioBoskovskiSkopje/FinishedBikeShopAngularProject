import {Injectable} from '@angular/core';
import {Http, Response, HttpModule} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GetJsonService {

  private url : string = "https://raw.githubusercontent.com/marioBagwell/bikeShop/master/BIKE%20SHOP/bikes.json";

  constructor(private http : Http) {}

  getData() {
    return this.http.request(this.url)
            .map(res => res.json())
   
      
  }
  

  
}
