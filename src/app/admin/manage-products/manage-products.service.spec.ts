import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ManageProductsService } from './manage-products.service';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';

describe('ManageProductsService', () => {
  let service: ManageProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ManageProductsService,
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
    service = TestBed.inject(ManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
