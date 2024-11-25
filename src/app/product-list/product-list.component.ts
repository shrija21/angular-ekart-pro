import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name = "John Doe";
  product = {
    name: 'iPhone 13',
    price: 999,
    color: 'Matt Black',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iPhone13_1.jpg'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }
}
