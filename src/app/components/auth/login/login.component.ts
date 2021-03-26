import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';
import { LoginModel } from '../../../models/loginModel';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   loginForm: FormGroup;
   customer: Customer;

   constructor(private formBuilder: FormBuilder,
               private toastrService: ToastrService,
               private authService: AuthService,
               private router: Router,
               private localStorageService: LocalStorageService,
               private customerService: CustomerService) {
   }

   ngOnInit(): void {
      this.createLoginForm();
   }

   createLoginForm() {
      this.loginForm = this.formBuilder.group({
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required]
      });
   }

   login() {
      if (this.loginForm.invalid) {
         this.toastrService.warning('Alanları gerektiği gibi doldurunuz', 'Dikkat');
         return;
      }

      let loginModel: LoginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(responseSuccess => {
         this.toastrService.success(responseSuccess.message, 'Başarılı');
         this.localStorageService.setToken(responseSuccess.data.token);
         this.getCustomerByEmail(loginModel.email);

         return this.router.navigate(['/cars']);
      }, responseError => {
         console.log(responseError.error)
         return this.toastrService.error(
            responseError.error.StatusCode + " " + responseError.error.Message, 'Hata'
         );
      });
   }

   getCustomerByEmail(email: string) {
      this.customerService.getCustomerByEmail(email).subscribe(responseSuccess => {
         this.customer = responseSuccess.data;
         this.localStorageService.setCurrentCustomer(this.customer)
      });
   }

   getYear() {
      return new Date().getFullYear();
   }
}