import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/dtos/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  public products: IProduct[] = [];
  public displayedColumns: string[] = ['id', 'name', 'price', 'actions']

  constructor(private productSercice: ProductService) {
  }
  
  ngOnInit(): void {
    this.productSercice.read().subscribe(products => {
      this.products = products;
    });
  }


}
