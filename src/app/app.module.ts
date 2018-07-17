import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClientModule } from 'client';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
