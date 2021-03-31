import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { RentDetail } from '../models/details/rentDetail';
import { ResponseModel } from '../models/responses/responseModel';
import { Rental } from '../models/entities/rental';

@Injectable({
   providedIn: 'root'
})

export class RentalService {

   apiUrl: string = 'https://localhost:44371/api/rentals/';
   rentingCar: Rental;

   constructor(private httpClient: HttpClient) {
      this.getRentals();
   }

   getRentals(): Observable<ListResponseModel<RentDetail>> {
      return this.httpClient.get<ListResponseModel<RentDetail>>(this.apiUrl);
   }

   getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>> {
      let newPath = this.apiUrl + 'get-rental-by-carid?carId=' + carId;
      return this.httpClient.get<ListResponseModel<Rental>>(newPath);
   }

   setRentingCar(rental: Rental) {
      this.rentingCar = rental;
   }

   getRentingCar() {
      return this.rentingCar;
   }

   removeRentingCar() {
      this.rentingCar = null
   }

   add(rental: Rental): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, rental);
   }
}
