import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemCheckoutComponent } from './product-item-checkout.component';

describe('CartProductItemComponent', () => {
  let component: ProductItemCheckoutComponent;
  let fixture: ComponentFixture<ProductItemCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemCheckoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemCheckoutComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('product', {
      id: '1',
      title: 'Test Product',
      price: 10,
      count: 1,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
