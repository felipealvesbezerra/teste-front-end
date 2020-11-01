import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { HomeComponent } from './views/home/home.component';
import { ProductRegisterComponent } from './views/product-register/product-register.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductRegisterComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/:_id/update",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
