import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from '../../../services/color.service';

@Component({
   selector: 'app-color-add',
   templateUrl: './color-add.component.html',
   styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

   // @ts-ignore
   colorAddForm: FormGroup;

   constructor(private formBuilder: FormBuilder,
               private toastrService: ToastrService,
               private colorService: ColorService) {
   }

   ngOnInit(): void {
      this.createColorAddForm();
   }

   createColorAddForm() {
      this.colorAddForm = this.formBuilder.group({
         name: ['', Validators.required]
      });
   }

   add() {
      let color = Object.assign({}, this.colorAddForm.value);

      if (!this.colorAddForm.valid) {
         this.toastrService.warning('Lütfen bilgileri doldurun', 'Dikkat');
         return;
      }

      this.colorService.add(color).subscribe(responseSuccess => {
         this.colorAddForm.reset();
         return this.toastrService.success(responseSuccess.message, 'Başarılı');
      }, responseError => {
         if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
               this.toastrService.error(
                  responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
               );
            }

            return;
         }

         this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
         return;
      });
   }
}
