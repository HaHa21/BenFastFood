import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './products.service';
import { Products } from './products.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],

  encapsulation: ViewEncapsulation.None
})

export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
  let data=localStorage.getItem('cart');
  if(data !== null){
    this.cartProducts = JSON.parse(data);
  } else {
    this.cartProducts = [];
  }

  this.products = [
    {
      "id": 1,
      "title": "Americano",
      "description": "Americano",
      "image": "/images/americanespresso.jpg",
      "price": 2
    },
    {
      "id": 2,
      "title": "Chicken Teriyaki",
      "description": "Chicken with sesame seed",
      "image": "/images/chicken_teriyaki.jpg",
      "price": 4
    }
  ]

  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
