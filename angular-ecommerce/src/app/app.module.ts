import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './servides/product.service';
import { Routes, RouterModule } from '@angular/router' 
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'category/:id' , component: ProductListComponent },
  { path: 'category' , component: ProductListComponent },
  { path: 'product' , component: ProductListComponent },
  { path: 'search/:keyword' , component: ProductListComponent },

  { path: '' , redirectTo : '/product', pathMatch: 'full' },
  { path: '**' , redirectTo: '/product', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent
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
