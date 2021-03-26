import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
   providedIn: 'root'
})

export class CustomerService {

   private apiUrl: string = 'https://localhost:44371/api/customers/';

   constructor(private httpClient: HttpClient) {
   }

   getCustomers(): Observable<ListResponseModel<Customer>> {
      return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
   }

   getCustomerByEmail(email: string): Observable<SingleResponseModel<Customer>> {
      let emailPath = this.apiUrl + "get-by-email?email=" + email
      return this.httpClient.get<SingleResponseModel<Customer>>(emailPath);
   }
}
