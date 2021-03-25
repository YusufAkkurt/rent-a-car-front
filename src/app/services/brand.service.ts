import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
   providedIn: 'root'
})

export class BrandService {

   private apiUrl: string = 'https://localhost:44371/api/brands';

   constructor(private httpClient: HttpClient) {
   }

   getBrands(): Observable<ListResponseModel<Brand>> {
      return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
   }

   add(brand: Brand): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, brand);
   }
}
