import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
public color = '';
public color1 = '';
public color2 = '';
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
  onClick1(){
	if (this.color==='red') {
		this.color=null;
		return
	}
	this.color1='red'
}
  onClick2(){
	if (this.color==='green') {
		this.color=null;
		return
	}
	this.color2='green'
}
}
