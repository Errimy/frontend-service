import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any;
  constructor(private http:HttpClient, private productService: ProductService, private router: Router) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/PRODUCT-SERVICE/products").subscribe({
      next :(data)=>{
        this.products=data;
      },
      error : (err)=>{}
    })
  }

  handleDeleteProduct(p: any) {
    let conf= confirm("Are you sure?")
    if(!conf) return;
    this.productService.deleteProduct(p.id).subscribe({
      next : data=>{
        alert("Product deleted successfully");
        this.router.navigateByUrl("/products")
      },
      error : err=>{
        console.log(err);
      }
    });
  }
}
