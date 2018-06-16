import { FilterService } from './../services/filter.service';
import {Component, OnInit} from '@angular/core';
import {IbikesProps} from '../Interfaces/ibikes-props';
import {GetJsonService} from '../services/getjson.service';
import 'rxjs/add/operator/distinct';

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnInit {

  constructor(private service : GetJsonService,private filterService:FilterService) {}

  title = 'Bike Shop';

  bikes : IbikesProps[]
  allBikes : IbikesProps[]

  public searchBrand : string;

  // modelName : any;

  // uniqueBrandName : string;

  // props : any;

  // titles : string[] = [];
  // val : object[] = [];

  ngOnInit() {
    return this
      .service
      .getData()
      .subscribe(res => {
        this.bikes = this.allBikes = res
      });

     

  }

  showFilteredBikes(genre) {
    this.bikes = this
      .allBikes
      .filter(el => el.genre === genre);
    console.log(this.bikes);
  }

  sorting(sort : string) {
    if (sort === "minPrice") {
      this
        .bikes
        .sort((a, b) => a.price - b.price)
    }
    if (sort === "maxPrice") {
      this
        .bikes
        .sort((a, b) => b.price - a.price)
    }

  };

  onCheck(key,value,c)
  {
    let obj = {[key]:value,isChecked:c.checked}
    this.bikes = this.filterService.getCheckedProducts(this.allBikes,obj)
  }

  searching() {

    if (this.searchBrand != null && this.searchBrand != "" && this.searchBrand.length > 2) {
      this.bikes = this
        .allBikes
        .filter((el) => el.model.toLowerCase().indexOf(this.searchBrand.toLowerCase().trim().replace(/\s/g, "")) > -1);
      // this.modelName = this
      //   .bikes
      //   .map(item => item.model);

      // this.uniqueBrandName = this
      //   .modelName
      //   .filter((x, i, a) => x && a.indexOf(x) === i);

      // console.log(this.uniqueBrandName);

      // console.log(this.bikes);

      this.searchBrand = "";
    } else {
      alert("Please enter a valid brand name");
      this.searchBrand = "";
    }
  }

  // callFilters(key, value, c, genre) {   let obj = { key: value.genre,
  // isChecked: c.checked }     console.log(obj); }

}