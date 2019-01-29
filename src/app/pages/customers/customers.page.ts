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
  results: Observable<CustomerModel>; // resultado de busqueda
  filterName: string = '';

  constructor(private customerService: CustomerService) { }

  searchCustomers() {
    this.results = this.customerService.getCustomers(this.filterName);
  }

  ngOnInit() {
  }

}
