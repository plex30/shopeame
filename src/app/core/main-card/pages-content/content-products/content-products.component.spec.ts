import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductsComponent } from './content-products.component';

describe('ContentProductsComponent', () => {
  let component: ContentProductsComponent;
  let fixture: ComponentFixture<ContentProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
