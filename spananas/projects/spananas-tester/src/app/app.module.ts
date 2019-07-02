import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSpananasModule } from 'ng-spananas';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSpananasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
