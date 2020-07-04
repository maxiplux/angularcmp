import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componets/login/login.component';
import {LayoutComponent} from './componets/layout/layout.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {OrdersComponent} from './componets/admin/orders/orders.component';
import {ProductsComponent} from './componets/admin/products/products.component';
import {CategoriesComponent} from './componets/admin/categories/categories.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'categories', component: CategoriesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'orders', component: OrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'products', component: ProductsComponent,
        canActivate: [AuthGuard]
      }
    ]


  },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
