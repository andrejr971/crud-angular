import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/dtos/product.model';
import { HeaderService } from 'src/app/services/header.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  public product: IProduct = {} as IProduct;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private headerService: HeaderService) {
    this.headerService.setHeaderData({
      icon: 'storefront',
      routeUrl: '/products',
      title: 'Deletar produto'
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.productService.readById(id).subscribe(data => this.product = data)
    }
  }

  deleteProduct(): void {
    if (this.product.id) {
      this.productService.delete(String(this.product.id)).subscribe(() => {
        this.productService.showMessage(`Produto deletado com sucesso`)
        this.router.navigate(['/products'])
      })
    }
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
