import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoBarComponent } from './into-bar.component';

describe('IntoBarComponent', () => {
  let component: IntoBarComponent;
  let fixture: ComponentFixture<IntoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
