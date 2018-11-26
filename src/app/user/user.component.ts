import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user') user : User ;
  title = 'Angular Material';
  constructor() {
    this.user = new User();
    this.user.name = "Arjun";
    this.user.designation = "Software Engineer";
    this.user.address = "Pune";
    this.user.phone = [
      '998899', '776699'
    ];
  }
 
  isCollapsed:boolean = true;
  inputText:string = "";
  toggleClick(){
    this.isCollapsed = !this.isCollapsed;
    console.log("toggleClick...");
  }
  ngOnInit() {

  }

}
