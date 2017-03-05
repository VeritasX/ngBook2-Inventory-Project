import { Component } from '@angular/core';
import { Product } from 'app/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
product: Product[];

constructor(){
  this.product = [ new Product('NICEHAT',
  'A Nice Black Hat',
  '/resources/images/products/black-hat.jpg',
  ['Men', 'Accesories', 'hats'],
  29.99 ),
  new Product(
    'NEATOJACKET',
    'Blue Jacket',
    '/resources/images/products/blue-jacket.jpg',
    ['Women', 'Apparel', 'Jackets & Vests'],
    238.99
  ),
  new Product('MYSHOES',
  'Black Running Shoes',
  '/resources/images/products/black-shoes.jpg', 
  ['Men' , 'Shoes' , 'Running Shoes'], 
  109.99)
  ];
}
productWasSelected(product: Product): void{
 console.log('Product clicked: ', product);
}

}

