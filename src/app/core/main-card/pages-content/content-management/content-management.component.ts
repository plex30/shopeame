import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router, private formBuilder: FormBuilder, private modalService: NgbModal ) { }

  data = {
    id: 0,
    name:  '',
    price:  '',
    description:  '',
    stars:  0,
    image:  '',
  };

  newData =  {
    name:  '',
    price:  '',
    description:  '',
    stars:  '',
    image:  '',  

  };

  dataFormu;
  closeResult = '';

 

  ngOnInit(): void {
    
    this.data = this.productService.getProduct();

    this.dataFormu = this.data;

    this.dataFormu = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      img: ['', [Validators.required]],
      stars: ['', [Validators.required]],

      
    })

    this.dataFormu.get('name').valueChanges.subscribe(name =>{
      if (this.data == undefined) {
        this.newData.name = name;
      }else{
        this.data.name = name;
      }
      
    })
    this.dataFormu.get('price').valueChanges.subscribe(price=>{
      if (this.data == undefined) {
        this.newData.price = price;
      }else{
        this.data.price = price;
      }
    })
    this.dataFormu.get('desc').valueChanges.subscribe(desc =>{
      if (this.data == undefined) {
        this.newData.description = desc;
      }else{
        this.data.description = desc;
      }
    })
    this.dataFormu.get('img').valueChanges.subscribe(img =>{
      if (this.data == undefined) {
        this.newData.image = img;
      }else{
        this.data.image = img;
      }
    })
    this.dataFormu.get('stars').valueChanges.subscribe(stars =>{
      if (this.data == undefined) {
        this.newData.stars = stars;
      }else{
        this.data.stars = stars;
      }
    })
    
  

  }
  
  saveProduct(content){
    if (!this.data) {
      this.productService.postProduct(this.newData).subscribe();
      this.open(content);
      this.router.navigateByUrl('/products');
    }else{
      this.productService.putProduct(this.data, this.data.id).subscribe();
      this.open(content);
      this.router.navigateByUrl('/products');
    }
    
  }

  open(content) {
    this.modalService.open(content);
  }
}



  


