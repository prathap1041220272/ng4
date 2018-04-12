import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onClick(){
	if (this.color==='yellow') {
	this.color=null;
	return
	}
	this.color='yellow'
}
}
