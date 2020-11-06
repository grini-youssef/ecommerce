import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './servides/product.service';
import { Routes, RouterModule } from '@angular/router' 
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component'


const routes: Routes = [
  { path: 'category/:id' , component: ProductListComponent },
  { path: 'category' , component: ProductListComponent },
  { path: 'product' , component: ProductListComponent },
  { path: 'search/:keyword' , component: ProductListComponent },
  { path: 'products/:id' , component: ProductDetailsComponent },
  { path: 'cart-details' , component: CartDetailsComponent },

  { path: '' , redirectTo : '/product', pathMatch: 'full' },
  { path: '**' , redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
