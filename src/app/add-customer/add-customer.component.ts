import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Customer} from "../customer/customer.module";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  newCustomerFormGroup!: FormGroup;
  constructor(private fb : FormBuilder, private customerService : CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.newCustomerFormGroup=this.fb.group({
      name : this.fb.control(null,[Validators.required, Validators.minLength(2)]),
      email : this.fb.control(null,[Validators.required, Validators.email])
    });
  }

  handleSaveCustomer() {
    let customer:Customer=this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next : data=>{
        alert("Customer saved successfully");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/customers")
      },
      error : err=>{
        console.log(err)
      }
    });
  }
}
