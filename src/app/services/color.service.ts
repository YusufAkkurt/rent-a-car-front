import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
   providedIn: 'root'
})

export class ColorService {

   private apiUrl: string = 'https://localhost:44371/api/colors';

   constructor(private httpClient: HttpClient) {
   }

   getColors(): Observable<ListResponseModel<Color>> {
      return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
   }

   add(color: Color): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, color);
   }
}
