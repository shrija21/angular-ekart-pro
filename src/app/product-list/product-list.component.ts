import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name: string = 'iPhone 13';
  price: number = 999;
  color: string = 'Matt Black';
}
