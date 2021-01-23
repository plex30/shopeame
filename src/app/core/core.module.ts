import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainCardComponent } from './main-card/main-card.component';
import { IntoBarComponent } from './components/into-bar/into-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ContentHomeComponent } from './main-card/pages-content/content-home/content-home.component';
import { ContentManagementComponent } from './main-card/pages-content/content-management/content-management.component';
import { ContentProductsComponent } from './main-card/pages-content/content-products/content-products.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './components/list-products/list-products.component';





@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    MainCardComponent, 
    IntoBarComponent, 
    MenuBarComponent, 
    SocialMediaComponent, 
    ContentHomeComponent, 
    ContentManagementComponent, 
    ContentProductsComponent, 
    GalleryComponent, 
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
    
  ],
  exports: [
    FooterComponent, 
    HeaderComponent, 
    MainCardComponent
    
  ]
})
export class CoreModule { }
