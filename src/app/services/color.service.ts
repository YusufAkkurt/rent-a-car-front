import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { Color } from '../models/entities/color';
import { ResponseModel } from '../models/responses/responseModel';
import { SingleResponseModel } from '../models/responses/singleResponseModel';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class ColorService {

   private apiUrl = environment.apiUrl + 'colors/';

   constructor(private httpClient: HttpClient) {
   }

   getColors(): Observable<ListResponseModel<Color>> {
      return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
   }

   getColorById(colorId: number): Observable<SingleResponseModel<Color>> {
      let newPath = this.apiUrl + 'get-by-id?id=' + colorId;
      return this.httpClient.get<SingleResponseModel<Color>>(newPath);
   }

   add(color: Color): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, color);
   }

   update(color: Color): Observable<ResponseModel> {
      return this.httpClient.put<ResponseModel>(this.apiUrl, color);
   }
}
