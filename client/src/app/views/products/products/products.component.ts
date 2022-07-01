import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.setHeaderData({
      icon: 'storefront',
      routeUrl: '/products',
      title: 'Produtos'
    })
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(path: string): void {
    this.router.navigate([path])
  }
}
