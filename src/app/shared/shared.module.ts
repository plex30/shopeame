import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule


    
  ],exports: [CardComponent]
})
export class SharedModule { }
