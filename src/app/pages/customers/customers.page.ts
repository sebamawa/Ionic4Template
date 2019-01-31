import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CustomerService } from './../../services/customer.service';
import { CustomerModel } from './../../models/Customer/CustomerModel';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  // customers: Observable<CustomerModel>; // resultado de busqueda
  customers: CustomerModel[];
  filterName: string = '';

  constructor(private customerService: CustomerService) { }

  searchCustomers(): void {
    // this.customers = this.customerService.getCustomers(this.filterName);
    this.customerService.getCustomers(this.filterName)
        .subscribe(
            customersResult => {
              this.customers = customersResult;
              console.log(this.customers);
            });
  }

  ngOnInit() {
  }

}
