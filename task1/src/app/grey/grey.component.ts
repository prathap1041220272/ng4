import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grey',
  templateUrl: './grey.component.html',
  styleUrls: ['./grey.component.css']
})
export class GreyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onClick(){
	if (this.color==='grey') {
		this.color=null;
		return
	}
	this.color='grey';

}
}
