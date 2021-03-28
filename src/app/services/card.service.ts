import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
   providedIn: 'root'
})
export class CardService {

   private apiUrl = 'https://localhost:44371/api/cards/';

   constructor(private httpClient: HttpClient) {
   }

   add(card: Card): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, card);
   }

   getByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
      let getByCustomerPath = this.apiUrl + 'get-by-customerId?customerId=' + customerId;
      return this.httpClient.get<ListResponseModel<Card>>(getByCustomerPath);
   }
}
