import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/dtos/product.model';
import { HeaderService } from 'src/app/services/header.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public product: IProduct = {} as IProduct;

  constructor(private productService: ProductService, private router: Router, private headerService: HeaderService) {
    this.headerService.setHeaderData({
      icon: 'storefront',
      routeUrl: '/products/create',
      title: 'Cadastrar produto'
    })
  }

  ngOnInit(): void {
  
  }

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(`Produto criado ${this.product.name}`)
      this.router.navigate(['/products'])
    });
  }

  cancelar() {
    this.router.navigate(['/products'])
  }
}
