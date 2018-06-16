
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';


@Injectable()
export class FilterService {

    objectForIterration: any = []
    titles: any = []
    previousFilter: string;
    private checkedObjects = []

    constructor() { }

    createObjectForIterration(checkedValue) {
        const key = Object.keys(checkedValue)[0];
        const value = Object.values(checkedValue)[0];
        const objectToCheck = { [key]: [value] }

        if (checkedValue.isChecked) {
            if (this.checkedObjects.indexOf(objectToCheck) === -1) {
                this.checkedObjects.push(objectToCheck);

                this.checkedObjects.forEach(el => {
                    Object.keys(el).forEach((checkedObjectKey, i) => {
                        if (this.titles.indexOf(checkedObjectKey) === -1) {
                            this.titles.push(checkedObjectKey)
                            this.objectForIterration.push({ [checkedObjectKey]: [] });
                        }
                    });
                });
            }
            this.objectForIterration.forEach(item => {
                if (item[key]) {
                    item[key].push(value)
                }
            })
        }
        else {
            this.objectForIterration.forEach(el => {
                if (el[key]) {
                    el[key] = el[key].filter(item => item !== value)

                    if (!el[key].length) {
                        this.titles = this.titles.filter(title => title !== key)
                        this.objectForIterration = this.objectForIterration.filter(el => !el[key])
                        this.checkedObjects = this.checkedObjects.filter(el => !el[key])
                    }
                }
            })
        }
        return this.objectForIterration;
    }

    getCheckedProducts(products, checkedValue) {

        let iterate = this.createObjectForIterration(checkedValue)
        //console.log(products)
        if (iterate.length) {
            iterate.forEach(element => {

                products = products.filter(product => {
                    // console.log(product)
                    // console.log(element)

                    let arrayToCheck = Object.values(element) as Array<any>;
                    let currFilterValues = Object.values(product);
                    let matched = false;

                    currFilterValues.forEach(curentFilterElement => {

                        if (arrayToCheck[0].indexOf(curentFilterElement) != -1)
                            matched = true;
                    });
                    return matched;
                });
            });
        }
        return products;
    }
}
