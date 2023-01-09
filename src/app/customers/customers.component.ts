import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {Customer} from "../customer/customer.module";
import {environment} from "../../environments/environment";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers: any;
  constructor(private http:HttpClient, private customerService : CustomerService,private router: Router) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers").subscribe({
      next :(data)=>{
        this.customers=data;
      },
      error : (err)=>{}
    })
  }

  public saveCustomer(customer : Customer):Observable<Customer>{
    return this.http.post<Customer>(environment.backendHost+"/customers", customer);
  }


  getBills(c: any) {
    this.router.navigateByUrl("/bills/"+c.id);
  }

  handleDeleteCustomer(c: Customer) {
    let conf= confirm("Are you sure?")
    if(!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next : data=>{
        alert("Customer deleted successfully");
        this.router.navigateByUrl("/customers")
      },
      error : err=>{
        console.log(err);
      }
    });
  }
}
