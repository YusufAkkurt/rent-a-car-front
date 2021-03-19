import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
   providedIn: 'root'
})

export class CarService {

   apiUrl: string = 'https://localhost:44371/api/cars/';

   constructor(private httpClient: HttpClient) {
   }

   getCars(): Observable<ListResponseModel<CarDetail>> {
      let newPath: string = this.apiUrl + 'get-car-details';
      return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

   getCarById(id: number): Observable<SingleResponseModel<CarDetail>> {
      let newPath: string = this.apiUrl + 'get-by-id?id=' + id;
      return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
   }

   getCarsByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
      let newPath: string = this.apiUrl + 'get-cars-by-brandid?brandId=' + brandId;
      return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

   getCarsByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
      let newPath: string = this.apiUrl + 'get-cars-by-colorid?colorId=' + colorId;
      return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }
}
