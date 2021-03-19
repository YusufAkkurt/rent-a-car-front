import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
   providedIn: 'root'
})

export class RentalService {

   apiUrl: string = 'https://localhost:44371/api/rentals';

   constructor(private httpClient: HttpClient) {
      this.getRentals();
   }

   getRentals(): Observable<ListResponseModel<Rental>> {
      return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
   }
}