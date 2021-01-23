import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [CardComponent, SearchComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule


    
  ],exports: [CardComponent, SearchComponent]
})
export class SharedModule { }
