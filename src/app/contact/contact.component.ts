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
        this.create_Address()
      ])
    })
  }
  create_Address(){
    return new FormGroup({
          'county': new FormControl(),
          'city': new FormControl(),
          'state' : new FormControl()
        })
  }
  add_address(){
    var addressArray = this.userForm.get('add_adress') as FormArray;
    addressArray.push(this.create_Address());
  }
  remove(index){
    var remove_addr= this.userForm.get('add_address') as FormArray;
    remove_addr.removeAt(index);
  }

}
