import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
   selector: 'app-text-input',
   templateUrl: './text-input.component.html',
   styleUrls: ['./text-input.component.css'],
   providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
   }]
})

export class TextInputComponent implements ControlValueAccessor {

   public value: string;
   public changed: (value: string) => void;
   public touched: () => void;
   public isDisabled: boolean;

   @Input() placeHolder: string


   writeValue(value: string): void {
      this.value = value;
   }

   onChange(event: Event): void {
      const value: string = (<HTMLInputElement> event.target).value;
      this.changed(value);
   }

   registerOnChange(fn: any): void {
      this.changed = fn;
   }

   registerOnTouched(fn: any): void {
      this.touched = fn;
   }

   setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
   }
}
