import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  constructor(){
    console.log("Hi I am a constructor!!");
  }


  ngOnInit(){
    console.log("I am ngOnInit()!!! ");
  }

}
