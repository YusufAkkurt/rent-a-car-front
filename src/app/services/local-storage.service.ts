import { Injectable } from '@angular/core';
import { Customer } from '../models/entities/customer';

@Injectable({
   providedIn: 'root'
})

export class LocalStorageService {

   tokenKey: string = 'token';
   currentCustomer: string = 'currentCustomer';

   constructor() {
   }

   setToken(tokenValue: string) {
      localStorage.setItem(this.tokenKey, tokenValue);
   }

   getToken() {
      return localStorage.getItem(this.tokenKey);
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
