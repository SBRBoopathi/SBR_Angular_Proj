import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls:['./child.component.scss']
})

export class ChildComponent implements OnInit {

 @Input() childmsg : string; // Using @Input() passing data from parent to child

 //Child to Parent passing data @output starts here 
 message:string = "hello mesage from child component"
 @Output() newMsgEvent = new EventEmitter<string>();
  
  sendMsg(){
    this.newMsgEvent.emit(this.message)
  }
   //Child to Parent passing data @output Ends here 

   viewChildMsg:string = "view child demo";

   student_mark = [];
   constructor(private stu : StudentService){

   }
   ngOnInit(){
     this.student_mark = this.stu.getStudents();
   }


}