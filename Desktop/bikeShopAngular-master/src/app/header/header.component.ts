import { FilterService } from "./../services/filter.service";
import { Component, OnInit } from "@angular/core";
import { IbikesProps } from "../Interfaces/ibikes-props";
import { GetJsonService } from "../services/getjson.service";
import "rxjs/add/operator/distinct";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private service: GetJsonService,
    private filterService: FilterService
  ) {}

  title = "Bike Shop";
  bikes: IbikesProps[]; //// MAIN ARRAY WITH DATA ////
  allBikes: IbikesProps[]; //// ARRAY HELPER FOR FILTERING THE DATA /////
  public searchBrand: string; //// USER INPUT BRAND NAME ///////

  ngOnInit() {
    return this.service.getData().subscribe(res => {
      this.bikes = this.allBikes = res;
    });
  }
  ///// SHOW BIKES BY GENRE //////
  showFilteredBikes(genre) {
    this.bikes = this.allBikes.filter(el => el.genre === genre);
  }
  ///// SORT BIKES BY PRICE ///////
  sorting(sort: string) {
    if (sort === "minPrice") {
      this.bikes.sort((a, b) => a.price - b.price);
    }
    if (sort === "maxPrice") {
      this.bikes.sort((a, b) => b.price - a.price);
    }
  }
  ///// GET CHECKED CHECKBOXES //////
  onCheck(key, value, c) {
    let obj = { [key]: value, isChecked: c.checked };
    this.bikes = this.filterService.getCheckedProducts(this.allBikes, obj);
  }
  ///// SEARCH BY BRAND NAME (USER INPUT) //////
  searching() {
    if (
      this.searchBrand != null &&
      this.searchBrand != "" &&
      this.searchBrand.length > 2
    ) {
      this.bikes = this.allBikes.filter(
        el =>
          el.model.toLowerCase().indexOf(
            this.searchBrand
              .toLowerCase()
              .trim()
              .replace(/\s/g, "")
          ) > -1
      );
      this.searchBrand = "";
    } else {
      alert("Please enter a valid brand name");
      this.searchBrand = "";
    }
  }
}
