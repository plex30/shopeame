import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HighlightSpanKind } from 'typescript';

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

  postProduct(newProduct){
    return this.http.post('http://localhost:3000/products', newProduct);
  }

  putProduct(updProduct, idProd){
    return this.http.put('http://localhost:3000/products/'+idProd, updProduct);
  }
}
