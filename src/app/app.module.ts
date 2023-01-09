import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { BillsComponent } from './bills/bills.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    BillsComponent,
    BillDetailsComponent,
    AddProductComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
