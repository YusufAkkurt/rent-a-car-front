import { Directive, ElementRef, HostListener } from '@angular/core';
import { environment } from '../../environments/environment';

@Directive({
   selector: '[appCheckDecimal]'
})
export class CheckDecimalDirective {

   private regex: RegExp = new RegExp(/^\d*\.?\d*$/);

   private specialKeys: string[] = environment.directiveSpecialKeys

   constructor(private elementRef: ElementRef) {
   }

   @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
      if (this.specialKeys.indexOf(event.key) !== -1) {
         return;
      }

      const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);

      if (inputValue && !String(inputValue).match(this.regex)) {
         event.preventDefault();
      }

      return;
   }

   @HostListener('paste', ['$event']) pnPaste(event: any) {
      const clipBoardData = (event.originalEvent || event).clipboardData.getData('text/plain');

      if (clipBoardData) {
         if (!this.regex.test(clipBoardData)) {
            event.preventDefault();
         }
      }

      return;
   }
}
