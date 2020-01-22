import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html' 
  
})
export class ParentComponent implements AfterViewInit{
  parentMessage = "message from parent Boopathi" // passing data from(Parent) here to child component
  
  constructor() { }

   //Child to Parent passing data @output starts here
  message:string;
  receiveMsg($event){
    this.message = $event
  }
   //Child to Parent passing data @output ends here
  @ViewChild(ChildComponent, {static: false}) child : ChildComponent;// if stattic true means,  To resolve query results before changes detection runs
  viewChildMsg : string;

   ngAfterViewInit(){
     this.viewChildMsg = this.child.viewChildMsg;

   }


}

