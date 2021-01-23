import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() data;
  searchForm;
  constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private searchService: SearchService) { }

  ngOnInit(): void {
    
    this.productsService.getProducts().subscribe(products=>{
      this.data = products;
      
    
    })

    this.searchForm = this.formBuilder.group({
      name: ['', [Validators.required]],  
    })
    
    this.searchForm.get('name').valueChanges.subscribe(nameInput =>{
      this.filterData(nameInput); 
    })

    
  }

  filterData(nInput){
    const filterName = this.data.filter((productsName)=>{
      if (productsName.name.toLowerCase().includes(nInput)) {
        return this.data;
      }
    })
   this.searchService.setFilterProducts(filterName);
  }

}