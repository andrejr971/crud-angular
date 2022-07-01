import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/dtos/product.model';
import { HeaderService } from 'src/app/services/header.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  public product: IProduct = {} as IProduct;


  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private headerService: HeaderService) {
    this.headerService.setHeaderData({
      icon: 'storefront',
      routeUrl: '/products',
      title: 'Editar produto'
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.productService.readById(id).subscribe(data => this.product = data)
    }
  }

  updateProdutc(): void {
    this.productService.update(this.product).subscribe(data => {
      this.product = data
      this.productService.showMessage(`Produto editado ${this.product.name}`)
      this.router.navigate(['/products'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
