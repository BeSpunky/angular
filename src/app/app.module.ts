import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleMapsModule } from '@bespunky/angular-google-maps/async';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleMapsModule.forRoot({ 'apiUrl': {key: ''}})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
