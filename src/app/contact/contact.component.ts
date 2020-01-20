import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent  {
  name = 'Contact Us';
  userForm:FormGroup;
  constructor(){
    this.userForm = new FormGroup({
      'name' : new FormControl(),
      'email' : new FormControl()
    })
  }
}
