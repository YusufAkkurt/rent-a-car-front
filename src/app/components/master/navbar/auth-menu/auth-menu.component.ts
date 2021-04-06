import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Customer } from '../../../../models/entities/customer';

@Component({
   selector: 'app-auth-menu',
   templateUrl: './auth-menu.component.html',
   styleUrls: ['./auth-menu.component.css']
})

export class AuthMenuComponent implements OnInit {

   constructor(private authService: AuthService,
               private localStorageService: LocalStorageService,
               private toastrService: ToastrService,
               private router: Router) {
   }

   ngOnInit(): void {
   }

   isAuth() {
      return this.authService.isAuthenticated();
   }

   logout() {
      this.localStorageService.removeToken();
      this.localStorageService.removeCurrentCustomer();
      this.toastrService.success('Çıkış yapıldı', 'Başarılı');

      return this.router.navigate(['/auth/login']);
   }

   getCurrentCustomer(): Customer {
      return this.localStorageService.getCurrentCustomer()
   }
}
