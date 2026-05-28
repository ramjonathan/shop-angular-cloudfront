import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrdersService } from './orders.service';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
    });
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
