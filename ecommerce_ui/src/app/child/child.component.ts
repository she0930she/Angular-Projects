import { Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(){}
  @Input() 
  name: any;

  ngOnChanges(changes: SimpleChange){
    console.log("I am ngOnChanges()!!! ");
    
  }

  ngOnInit(){
    console.log("==== child:  I am ngOnInit()!!! =====");
  }
  
}
