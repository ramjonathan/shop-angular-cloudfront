import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { Product } from './product.interface';
import { CONFIG_TOKEN } from '../core/injection-tokens/config.token';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: {
            apiEndpoints: {
              product: 'https://api.example.com',
              order: '',
              import: '',
              bff: '',
              cart: '',
            },
            apiEndpointsEnabled: {
              product: true,
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
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product title', () => {
    expect(service.getProductTitle({ id: '1', title: 'test' } as Product)).toBe(
      'test',
    );
  });
});
