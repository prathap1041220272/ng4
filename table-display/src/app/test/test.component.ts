import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public users;
  constructor() { 
    this.users = '';
  }

  form(user){
    console.log(user.value);
    this.users = user.value;
  }

  ngOnInit() {
  }

}
