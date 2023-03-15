import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from '../Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  get f(){
    return this.productForm.controls;
  }

  productForm = new FormGroup({
    productId: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    productCost: new FormControl('', [Validators.required])
  })

  product: Product = new Product();

  createProduct(){
    this.product.id=this.f['productId'].value;
    this.product.productName=this.f['productName'].value;
    this.product.cost=this.f['productCost'].value;
    console.log(this.productForm.value);
  }


}
