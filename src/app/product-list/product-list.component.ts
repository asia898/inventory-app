import { 
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {} from '../product.model';

/**
 * @ProductList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  /**
   * @input productList - the Product[] passed to us
   */

  @Input() productList: Product[];

  /**
   * @output onProductSelected  - outputs the current
   *          Product whenever a new Product is selected
   */

  @Output() onProductSelected: EventEmitter<Product>;
}
