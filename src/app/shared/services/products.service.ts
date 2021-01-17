import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  product:any;

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  setProduct(product){
    this.product = product;
  }

  getProduct(){
    let temp = this.product;
    this.clearProduct();
    return temp;
  }

  clearProduct(){
    this.product = undefined;
  }
}
