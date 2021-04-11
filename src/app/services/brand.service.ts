import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/responses/listResponseModel';
import { Brand } from '../models/entities/brand';
import { ResponseModel } from '../models/responses/responseModel';
import { SingleResponseModel } from '../models/responses/singleResponseModel';
import { environment } from '../../environments/environment';

@Injectable({
   providedIn: 'root'
})

export class BrandService {

   private apiUrl = environment.apiUrl + 'brands/';

   constructor(private httpClient: HttpClient) {
   }

   getBrands(): Observable<ListResponseModel<Brand>> {
      return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
   }

   getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
      let newPath = this.apiUrl + 'get-by-id?id=' + brandId;
      return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
   }

   add(brand: Brand): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, brand);
   }

   update(brand: Brand): Observable<ResponseModel> {
      return this.httpClient.put<ResponseModel>(this.apiUrl, brand);
   }
}
