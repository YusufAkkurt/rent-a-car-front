import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
   providedIn: 'root'
})
export class CardService {

   apiUrl = 'https://localhost:44371/api/cards';

   constructor(private httpClient: HttpClient) {
   }

   add(card: Card): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, card);
   }
}
