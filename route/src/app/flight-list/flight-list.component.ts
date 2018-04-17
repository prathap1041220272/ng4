import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
	  public show:boolean = false;
  public buttonName:any = 'Show';

 flight = [
{
"name": "Jet Airways",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-11T01:58:13.768Z",
"arrivalTime": "2018-04-11T02:58:13.768Z"
},
{
"name": "Air India",
"bordingPoint": "Mumbai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-12T01:58:13.768Z",
"arrivalTime": "2018-04-12T02:58:13.768Z"
},
{
"name": "IndiGo",
"bordingPoint": "Bangalore",
"destinationPoint": "Kolkata",
"departureTime": "2018-04-15T01:58:13.768Z",
"arrivalTime": "2018-04-15T02:58:13.768Z"
},
{
"name": "SpiceJet",
"bordingPoint": "Delhi",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-14T01:58:13.768Z",
"arrivalTime": "2018-04-14T02:58:13.768Z"
},
{
"name": "GoAir",
"bordingPoint": "Kolkata",
"destinationPoint": "Chennai",
"departureTime": "2018-04-13T01:58:13.768Z",
"arrivalTime": "2018-04-13T02:58:13.768Z"
},
{
"name": "Vistara",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-17T01:58:13.768Z",
"arrivalTime": "2018-04-17T02:58:13.768Z"
},
{
"name": "Zoom Air",
"bordingPoint": "Kolkata",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-19T01:58:13.768Z",
"arrivalTime": "2018-04-19T02:58:13.768Z"
},
{
"name": "Blue Dart Aviation",
"bordingPoint": "Chennai",
"destinationPoint": "Mumbai",
"departureTime": "2018-04-13T01:58:13.768Z",
"arrivalTime": "2018-04-13T02:58:13.768Z"
},
{
"name": "Deccan Charters",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-17T01:58:13.768Z",
"arrivalTime": "2018-04-17T02:58:13.768Z"
},
{
"name": "TajAir",
"bordingPoint": "Chennai",
"destinationPoint": "Delhi",
"departureTime": "2018-04-15T01:58:13.768Z",
"arrivalTime": "2018-04-15T02:58:13.768Z"
},
{
"name": "Titan Aviation",
"bordingPoint": "Chennai",
"destinationPoint": "Bangalore",
"departureTime": "2018-04-11T01:58:13.768Z",
"arrivalTime": "2018-04-11T02:58:13.768Z"
}
];
  constructor() { }

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
