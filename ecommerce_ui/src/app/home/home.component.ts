import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoggedIn:any;
  listData = [1,2,3,4,5];
  heroes=[
    {id:1, name:"superwomen"},
    {id:2, name:"batman"},
    {id:3, name:"Robin"}
  ]

  myTester(){
    return false;
  }

  ngOnInit(){
    this.isLoggedIn= false;
  }

}
