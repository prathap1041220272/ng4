import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onClick(){
	if (this.color==='blue') {
		this.color=null;
		return
	}
	this.color='blue'
}
}
