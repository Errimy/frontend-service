import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import {Product} from "../product/product.module";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  /*public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers")
  }*/

  /*public searchCustomers(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }*/

  public saveProduct(product : Product):Observable<Product>{
    return this.http.post<Product>(environment.backendHost+"/PRODUCT-SERVICE/products", product);
  }

  public deleteProduct(id: number){
    return this.http.delete<any>(environment.backendHost+"/PRODUCT-SERVICE/products/"+id);
  }
}
