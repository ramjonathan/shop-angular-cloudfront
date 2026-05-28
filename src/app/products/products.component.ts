import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [ProductItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: [],
  });
}
