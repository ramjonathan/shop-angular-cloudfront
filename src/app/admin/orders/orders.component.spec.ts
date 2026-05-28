import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';

describe('ManageOrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersComponent, HttpClientTestingModule],
      providers: [
        OrdersService,
        {
          provide: CONFIG_TOKEN,
          useValue: {
            apiEndpoints: {
              product: '',
              order: '',
              import: '',
              bff: '',
              cart: '',
            },
            apiEndpointsEnabled: {
              product: false,
              order: false,
              import: false,
              bff: false,
              cart: false,
            },
            production: false,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
