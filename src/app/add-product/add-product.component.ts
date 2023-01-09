import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../product/product.module";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProductFormGroup!: FormGroup;
  constructor(private fb : FormBuilder, private productService : ProductService, private router: Router) { }


  ngOnInit(): void {
    this.newProductFormGroup=this.fb.group({
      name : this.fb.control(null,[Validators.required, Validators.minLength(2)]),
      price : this.fb.control(null,[Validators.required]),
      quantity : this.fb.control(null,[Validators.required])
    });
  }

  handleSaveProduct() {
    let product:Product=this.newProductFormGroup.value;
    this.productService.saveProduct(product).subscribe({
      next : data=>{
        alert("Product saved successfully");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/products")
      },
      error : err=>{
        console.log(err)
      }
    });
  }
}
