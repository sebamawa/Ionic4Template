import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerModel } from './../models/Customer/CustomerModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url: string;

  constructor(private http: HttpClient) { }

  getCustomers(name: string): Observable<CustomerModel[]> {
    // this.url = `http://localhost:3000/api/Customers?filter[where][name]=${encodeURI(name)}`;
    // this.url = `http://localhost:3000/api/Customers?filter={"where":{"name":{"like":"${encodeURI(name)}","options":"i"}}}` ;
    this.url = `http://localhost:3000/api/Customers?filter[where][name][like]=${encodeURI(name)}%`;
    console.log(this.url);
    return this.http.get<CustomerModel[]>(this.url);
  }
}
