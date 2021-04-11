import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { CarImage } from '../models/entities/carImage';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class CarImageService {

   private apiUrl = environment.apiUrl + 'carImages/';

   constructor(private httpClient: HttpClient) {
   }

   getPhotosByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
      let newPath = this.apiUrl + 'get-list-by-carId?carId=' + carId;
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
}
