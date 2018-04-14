import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ColorComponent } from './color/color.component';
import { FlightRoutingModule } from './/flight-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    FlightRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
