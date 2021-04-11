import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { CarDetail } from '../models/details/carDetail';
import { SingleResponseModel } from '../models/responses/singleResponseModel';
import { ResponseModel } from '../models/responses/responseModel';
import { Car } from '../models/entities/car';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class CarService {

   private apiUrl = environment.apiUrl + 'cars/';

   constructor(private httpClient: HttpClient) {
   }

   getCarDetail(): Observable<ListResponseModel<CarDetail>> {
      let newPath: string = this.apiUrl + 'get-details';
      return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
   }

   getCarById(id: number): Observable<SingleResponseModel<Car>> {
      let newPath: string = this.apiUrl + 'get-by-id?id=' + id;
      return this.httpClient.get<SingleResponseModel<Car>>(newPath);
   }

   add(car: Car): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, car);
   }

   update(car: Car): Observable<ResponseModel> {
      return this.httpClient.put<ResponseModel>(this.apiUrl, car);
   }
}
