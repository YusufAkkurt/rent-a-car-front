import { Injectable } from '@angular/core';
import { Customer } from '../models/entities/customer';
import { TokenModel } from '../models/tokenModel';

@Injectable({
   providedIn: 'root'
})

export class LocalStorageService {

   tokenKey: string = 'token';
   currentCustomer: string = 'currentCustomer';

   constructor() {
   }

   setToken(tokenValue: TokenModel) {
      localStorage.setItem(this.tokenKey, JSON.stringify(tokenValue));
   }

   getToken(): TokenModel {
      return JSON.parse(localStorage.getItem(this.tokenKey));
   }

   removeToken() {
      localStorage.removeItem(this.tokenKey);
   }

   setCurrentCustomer(currentCustomerValue: Customer) {
      localStorage.setItem(this.currentCustomer, JSON.stringify(currentCustomerValue));
   }

   getCurrentCustomer(): Customer {
      return JSON.parse(localStorage.getItem(this.currentCustomer));
   }

   removeCurrentCustomer() {
      localStorage.removeItem(this.currentCustomer);
   }
}
