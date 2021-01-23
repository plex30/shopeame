import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from 'src/app/core/components/list-products/list-products.component';
import { ProductsPageComponent } from './products-page.component';

const routes: Routes = [
  {path:'', component: ProductsPageComponent},
  {path:'list', component: ProductsPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsPageRoutingModule { }
