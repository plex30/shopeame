import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-content-products',
  templateUrl: './content-products.component.html',
  styleUrls: ['./content-products.component.scss']
})

export class ContentProductsComponent implements OnInit {

  products:any;
  txtInput:any = '';
  searchForm;
  filterPro;
  @Output() countProdEmitter = new EventEmitter();

  constructor(private productsService: ProductsService, public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products=>{
      this.products = products;
      this.filterPro = products;
      
    })

    
    this.searchForm = this.formBuilder.group({
      name: ['', [Validators.required]],  
    })
    
    this.searchForm.get('name').valueChanges.subscribe(nameInput =>{
      if (nameInput == '') {
        this.products = this.filterPro;
      }else{
        this.filterData(nameInput); 
      }
      
    })

    
  
  }
 
  filterData(nInput){
    const filterName = this.products.filter((productsName)=>{
   
      if (productsName.name.toLowerCase().includes(nInput.toLowerCase())) {
        return this.products;
      }
    })
    this.products = filterName;
  
  }

  sendCount(){

    let cProd = this.products;
  
    return console.log(Object.keys(cProd).length) ;

  }
}
