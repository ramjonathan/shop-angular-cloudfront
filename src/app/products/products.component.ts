import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { Product } from './product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [ProductItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products: Product[] = [];
}
