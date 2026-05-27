import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl } from '@angular/forms';

import { CartShippingFormComponent } from './cart-shipping-form.component';

describe('CartShippingFormComponent', () => {
  let component: CartShippingFormComponent;
  let fixture: ComponentFixture<CartShippingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartShippingFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartShippingFormComponent);
    component = fixture.componentInstance;
    const formGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      country: new FormControl(''),
    });
    fixture.componentRef.setInput('shippingInfo', formGroup);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
