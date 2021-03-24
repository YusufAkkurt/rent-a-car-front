import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
   providedIn: 'root'
})

export class RentalService {

   apiUrl: string = 'https://localhost:44371/api/rentals/';

   constructor(private httpClient: HttpClient) {
      this.getRentals();
   }

   getRentals(): Observable<ListResponseModel<Rental>> {
      return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
   }

   getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>> {
      let newPath = this.apiUrl + 'get-rental-by-carid?carId=' + carId;
      return this.httpClient.get<ListResponseModel<Rental>>(newPath);
   }

   add(rental: Rental): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, rental);
   }
}
