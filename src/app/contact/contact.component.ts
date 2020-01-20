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
      'email' : new FormControl(),
      'aligned' : new FormControl(),
      'multiple_align' : new FormArray([
        new FormGroup({
          'left' : new FormControl()
        }),
        new FormGroup({
          'middle' : new FormControl()
          
        }),
        new FormGroup({
          'right' : new FormControl()
          
        })
      ]),
      'add_adress' : new FormArray([
       
      ])
    })
  }

  add_address(){
    var addressArray = this.userForm.get('add_adress') as FormArray;
    addressArray.push(new FormGroup({
          'county': new FormControl(),
          'city': new FormControl(),
          'state' : new FormControl()
        }))
  }

}
