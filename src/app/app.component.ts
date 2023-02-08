import {
  Component,
  EventEmitter
} from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  title: string;

  constructor() {
    this.title = 'inventory-app';
    this.products = [
      new Product(
        'NICEHAT', //sku,
        'A Nice Black Hat', //name
        '/assets/images/products/black-hat.jpg', //imageUrl
        ['Men', 'Accesories', 'Hats'], //department
        29.99 //price
      ),
      new Product(
          'NETOJACKET', //sku,
          'Blue Jacket', //name
          '/assets/images/products/blue-jacket.jpg', //imageUrl
          ['Woman', 'Apparel', 'Jackets & Vests'], //department
          238.38 //price
      ),
      new Product(
        'MYSHOES', //sku,
        'Black Running Shoes', //name
        '/assets/images/products/black-shoes.jpg', //imageUrl
        ['Man', 'Shoes', 'Running Shoes'], //department
        109.99 //price
      ),
    ]
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
