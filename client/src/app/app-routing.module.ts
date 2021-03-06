import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './views/products/product-create/product-create.component';
import { ProductDeleteComponent } from './views/products/product-delete/product-delete.component';
import { ProductUpdateComponent } from './views/products/product-update/product-update.component';
import { ProductsComponent } from './views/products/products/products.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  }, 
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'products/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'products/delete/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
