import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './component/menu/menu.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ApproutingModule } from './approuting/approuting.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
