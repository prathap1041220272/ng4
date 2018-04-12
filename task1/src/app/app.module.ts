import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreyComponent } from './grey/grey.component';
import { BlueComponent } from './blue/blue.component';
import { YellowComponent } from './yellow/yellow.component';


@NgModule({
  declarations: [
    AppComponent,
    GreyComponent,
    BlueComponent,
    YellowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
