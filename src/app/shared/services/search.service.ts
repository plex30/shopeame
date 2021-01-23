import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clear } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  filterProducts;

  constructor(private http: HttpClient) { }

  setFilterProducts(products){
    
    this.filterProducts = products;
    console.log(this.filterProducts)
  }

  getFilterProducts(){
    let temp = this.filterProducts;
    this.clearProduct();
    console.log(temp)
    return temp;
    
  }

  clearProduct(){
    this.filterProducts = undefined;
  }
}
