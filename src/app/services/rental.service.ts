import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})

export class RentalService {

   apiUrl: string = 'https://localhost:44371/api/rentals';

   constructor(private httpClient: HttpClient) {
      this.getRentals();
   }

   getRentals(): Observable<RentalResponseModel> {
      return this.httpClient.get<RentalResponseModel>(this.apiUrl);
   }
}