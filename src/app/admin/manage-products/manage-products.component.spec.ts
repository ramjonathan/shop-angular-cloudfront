import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductsComponent } from './manage-products.component';
import { CONFIG_TOKEN } from 'src/app/core/injection-tokens/config.token';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ManageProductsService } from './manage-products.service';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('ManageProductsComponent', () => {
  let component: ManageProductsComponent;
  let fixture: ComponentFixture<ManageProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ManageProductsComponent,
        HttpClientTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideRouter([]),
        {
          provide: ManageProductsService,
          useValue: {
            uploadProductsCSV: () => {
              return of(null);
            },
          },
        },
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
    fixture = TestBed.createComponent(ManageProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
