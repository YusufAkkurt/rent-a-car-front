import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { Customer } from '../models/entities/customer';
import { SingleResponseModel } from '../models/responses/singleResponseModel';
import { ResponseModel } from '../models/responses/responseModel';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class CustomerService {

   private apiUrl = environment.apiUrl + 'customers/';

   constructor(private httpClient: HttpClient) {
   }

   getCustomers(): Observable<ListResponseModel<Customer>> {
      return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
   }

   getCustomerByEmail(email: string): Observable<SingleResponseModel<Customer>> {
      let emailPath = this.apiUrl + 'get-by-email?email=' + email;
      return this.httpClient.get<SingleResponseModel<Customer>>(emailPath);
   }

   update(customer: Customer): Observable<ResponseModel> {
      return this.httpClient.put<ResponseModel>(this.apiUrl, customer);
   }
}
