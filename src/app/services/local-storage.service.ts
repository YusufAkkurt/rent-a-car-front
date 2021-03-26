import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})

export class LocalStorageService {

   tokenKey: string = 'token';

   constructor() {
   }

   setToken(tokenValue: string) {
      localStorage.setItem(this.tokenKey, tokenValue);
   }

   getToken() {
      return localStorage.getItem(this.tokenKey);
   }

   removeToken() {
      localStorage.removeItem(this.tokenKey)
   }
}
