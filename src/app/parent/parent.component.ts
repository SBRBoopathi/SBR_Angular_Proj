import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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

  // 1) View Child example of passing mesage text strats here /// 
  @ViewChild(ChildComponent, {static: false}) child : ChildComponent;// if stattic true means,  To resolve query results before changes detection runs
  viewChildMsg : string;

  // 1) View Child example of passing mesage text strats here ///
  @ViewChild('desct', {static:false}) desct : ElementRef;


   ngAfterViewInit(){
     this.viewChildMsg = this.child.viewChildMsg;

     console.log(this.desct.nativeElement.innerHTML);
     this.desct.nativeElement.innerHTML = "Using View child (elementref) Dome succesfully updated"
   }


}

