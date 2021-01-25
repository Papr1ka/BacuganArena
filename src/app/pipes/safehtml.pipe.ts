import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(style : any) {
    console.log(style);
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}