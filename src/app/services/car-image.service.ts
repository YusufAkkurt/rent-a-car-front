import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class CarImageService {

   apiUrl: string = 'https://localhost:44371/api/carimages/';

   constructor(private httpClient: HttpClient) {
   }

   getPhotosByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
      let newPath = this.apiUrl + 'get-list-by-carid?carId=' + carId;
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
}
