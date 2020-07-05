import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './componets/layout/layout.component';
import { LoginComponent } from './componets/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {HttpClientModule} from '@angular/common/http';
import { MainContentComponent } from './componets/layout/main-content/main-content.component';
import { MainContentTopBarComponent } from './componets/layout/main-content-top-bar/main-content-top-bar.component';
import { MainContentFooterComponent } from './componets/layout/main-content-footer/main-content-footer.component';
import { MainContentSideBarComponent } from './componets/layout/main-content-side-bar/main-content-side-bar.component';
import { MainContentScrollTopModalComponent } from './componets/layout/main-content-scroll-top-modal/main-content-scroll-top-modal.component';
import { CategoriesComponent } from './componets/admin/categories/categories.component';
import { ProductsComponent } from './componets/admin/products/products.component';
import { OrdersComponent } from './componets/admin/orders/orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryFormComponent } from './componets/admin/categories/category-form/category-form.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';

import * as LogRocket from 'logrocket';
LogRocket.init('ri2cmp/angularcmp');

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    MainContentComponent,
    MainContentTopBarComponent,
    MainContentFooterComponent,
    MainContentSideBarComponent,
    MainContentScrollTopModalComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
