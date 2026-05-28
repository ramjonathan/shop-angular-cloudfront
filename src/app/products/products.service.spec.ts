import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Product } from './product.interface';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return product title', () => {
    expect(service.getProductTitle({ title: 'test' } as Product)).toBe('test');
  });
});
