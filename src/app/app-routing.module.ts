import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {BillsComponent} from "./bills/bills.component";
import {BillDetailsComponent} from "./bill-details/bill-details.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes=[
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "customers", component: CustomersComponent
  },
  {
    path: "add-customer", component: AddCustomerComponent
  },
  {
    path: "add-product", component: AddProductComponent
  },
  {
    path: "bills/:id", component: BillsComponent
  },
  {
    path: "bill-details/:id", component: BillDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
