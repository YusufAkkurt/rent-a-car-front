import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/registerModel';
import { LocalStorageService } from './local-storage.service';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   private apiUrl = 'https://localhost:44371/api/auth/';

   constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
   }

   login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
      let loginPath = this.apiUrl + 'login';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(loginPath, loginModel);
   }

   register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
      let registerPath = this.apiUrl + 'register';
      return this.httpClient.post<SingleResponseModel<TokenModel>>(registerPath, registerModel);
   }

   isAuthenticated(): boolean {
      return !!this.localStorageService.getToken();
   }
}
