import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './servides/product.service';
import { Routes, RouterModule } from '@angular/router' 
import { Product } from './common/product';

const routes: Routes = [
  { path: 'category/:id' , component: ProductListComponent },
  { path: 'category' , component: ProductListComponent },
  { path: 'product' , component: ProductListComponent },
  { path: '' , redirectTo : '/product', pathMatch: 'full' },
  { path: '**' , redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
