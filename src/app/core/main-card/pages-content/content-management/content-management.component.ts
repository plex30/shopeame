import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router, private formBuilder: FormBuilder) { }

  data;
  dataFormu;



  ngOnInit(): void {
    this.data = this.productService.getProduct();
    console.log(this.data)

    this.dataFormu = this.data;

    this.dataFormu = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      img: ['', [Validators.required]],
      stars: ['', [Validators.required]],

      
    })

    this.dataFormu.get('name').valueChanges.subscribe(name =>{
      this.data.name = name;
    })
    this.dataFormu.get('price').valueChanges.subscribe(price=>{
      this.data.price = price;
    })
    this.dataFormu.get('desc').valueChanges.subscribe(desc =>{
      this.data.description = desc;
    })
    this.dataFormu.get('img').valueChanges.subscribe(img =>{
      this.data.image = img;
    })
    this.dataFormu.get('stars').valueChanges.subscribe(stars =>{
      this.data.stars = stars;
    })
    
  console.log(this.dataForm)

  }
  

}
