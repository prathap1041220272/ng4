import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorComponent } from './color/color.component';
import { FlightListComponent } from './flight-list/flight-list.component'

const routes : Routes = [
{path:'',redirectTo:'color',pathMatch:'full'},
{path:'color' ,component: ColorComponent},
{path:'flight',component:FlightListComponent},
{path:'**',redirectTo:'color',pathMatch:'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
  RouterModule
  ],
  declarations: []
})
export class FlightRoutingModule { }
