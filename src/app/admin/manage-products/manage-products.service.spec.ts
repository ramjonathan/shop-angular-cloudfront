import { TestBed } from '@angular/core/testing';

import { ManageProductsService } from './manage-products.service';

describe('ManageProductsService', () => {
  let service: ManageProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageProductsService],
    });
    service = TestBed.inject(ManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
