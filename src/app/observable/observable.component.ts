import { Component } from '@angular/core';
import { ObService } from '../ObService/ob.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

 
  employee: any = [];
  customer = {}


  constructor(private service: ObService, private router:Router) {
    service.getAll().subscribe(data => {
      this.employee = data;
    })
  }

  onFormSubmit(value: any) {
    console.log(value);
    this.customer = value;  // put values in object
    this.service.postCustomer(this.customer).subscribe((res) => {
      this.employee.unshift(res)
    })
  }

  onDelete(id: any) {
    this.service.deleteCustomer(id).subscribe((res) => {
      this.employee.pop(res)

    })
  }

  onUpdate(id: any) {
    this.service.putcustomer(id).subscribe((res) => {

    })
  }

  onView(id:any)
  {
        this.router.navigate(["/detail",id])
  }
}












