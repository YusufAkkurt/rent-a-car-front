import { Injectable } from '@angular/core';
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ExpirationInterceptor implements HttpInterceptor {

   constructor(private localstorageService: LocalStorageService,
               private router: Router,
               private toastrService: ToastrService) {
   }

   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      let tokenModel = this.localstorageService.getToken();
      if (!tokenModel) {
         return next.handle(request);
      }

      let expirationDate = new Date(tokenModel.expiration);
      let currentDate = new Date();

      if (Number(expirationDate) <= Number(currentDate)) {
         this.localstorageService.removeToken();
         this.toastrService.info(
            'Oturumunuzun süresi doldu, lütfen tekrar giriş yapın', 'Bilgi'
         )

         this.router.navigate(['/auth/login']);
      }

      return next.handle(request);
   }
}
