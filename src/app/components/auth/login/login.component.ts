import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   loginForm: FormGroup;

   constructor(private formBuilder: FormBuilder,
               private toastrService: ToastrService,
               private authService: AuthService,
               private router: Router) {
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

      let loginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(responseSuccess => {
         this.toastrService.success(responseSuccess.message, 'Başarılı');
         localStorage.setItem('token', responseSuccess.data.token);

         return this.router.navigate(['/cars']);
      }, responseError => {
         return this.toastrService.error(responseError.error, 'Hata');
      });
   }

   getYear() {
      return new Date().getFullYear();
   }
}
