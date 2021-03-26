import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../../../models/registerModel';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

   registerForm: FormGroup;

   constructor(private formBuilder: FormBuilder,
               private toastrService: ToastrService,
               private authService: AuthService,
               private router: Router,
               private localStorageService: LocalStorageService) {
   }

   ngOnInit(): void {
      this.createRegisterForm();
   }

   createRegisterForm() {
      this.registerForm = this.formBuilder.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         password: ['', Validators.required],
         confirmPassword: ['', Validators.required]
      });
   }

   register() {
      if (this.registerForm.invalid) {
         this.toastrService.warning('Lütfen boş alan bırakmayınız', 'Dikkat');
         return;
      }

      if (this.registerForm.value['password'] != this.registerForm.value['confirmPassword']) {
         this.toastrService.error('Şifreler uyuşmuyor', 'Hata');
         return;
      }

      delete this.registerForm.value['confirmPassword'];
      let registerModel: RegisterModel = Object.assign({}, this.registerForm.value);

      this.authService.register(registerModel).subscribe(responseSuccess => {
         this.toastrService.success(responseSuccess.message, 'Başarılı');
         this.localStorageService.setToken(responseSuccess.data.token);

         return this.router.navigate(['/cars']);
      }, responseError => {
         if (responseError.error.ValidationErrors) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
               this.toastrService.error(
                  responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
               );
            }

            return;
         }

         this.toastrService.error(
            responseError.status + ' ' + responseError.name, responseError.error
         );
      });
   }

   getYear() {
      return new Date().getFullYear();
   }
}
