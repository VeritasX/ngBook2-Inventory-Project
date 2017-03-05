import { Component } from '@angular/core';
import { Product } from 'app/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
product: Product;

constructor(){
  this.product = new Product('NICEHAT',
  'A Nice Black Hat',
  '/resources/images/products/black-hat.jpg',
  ['Men', 'Accesories', 'hats'],
  29.99 );
}

}

