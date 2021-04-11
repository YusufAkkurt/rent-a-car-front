import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-brand-add',
   templateUrl: './brand-add.component.html',
   styleUrls: ['./brand-add.component.css']
})

export class BrandAddComponent implements OnInit {

   // @ts-ignore
   brandAddForm: FormGroup;

   constructor(private brandService: BrandService,
               private formBuilder: FormBuilder,
               private toastrService: ToastrService) {
   }

   ngOnInit(): void {
      this.createBrandAddForm();
   }

   createBrandAddForm() {
      this.brandAddForm = this.formBuilder.group({
         name: ['', Validators.required]
      });
   }

   add() {
      let brand = Object.assign({}, this.brandAddForm.value);

      if (!this.brandAddForm.valid) {
         this.toastrService.warning('Lütfen bilgileri doldurun', 'Dikkat');
         return;
      }

      this.brandService.add(brand).subscribe(responseSuccess => {
         this.brandAddForm.reset();
         this.toastrService.success(responseSuccess.message, 'Başarılı');
         return;
      }, responseError => {
         if (responseError.error.ValidationErrors.length == 0) {
            this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
            return;
         }

         for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(
               responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
            );
         }
      });
   }
}
