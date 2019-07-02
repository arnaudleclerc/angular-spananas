import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spananas',
  template: `<span [innerHtml]="spananas"></span>`,
  styles: []
})
export class NgSpananasComponent {

  public readonly spananas: SafeHtml = this._sanitizer.bypassSecurityTrustHtml('&#127821;');

  constructor(private readonly _sanitizer: DomSanitizer) {

  }

}
