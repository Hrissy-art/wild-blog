import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  newContact: User | null = null;
  contactForm = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.minLength(4)]),
password: new FormControl ('', [Validators.required,Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
email: new FormControl ('', Validators.required,),
address: new FormGroup({
street: new FormControl('', [Validators.required]),
postalCode: new FormControl('', [Validators.required]),
town: new FormControl('', [Validators.required])
})
});
  // changeUsername() {
  //   this.contactForm.setValue.('kitten69');
  // }
  onSubmit():void {
    if(this.contactForm.valid)
    {
      this.newContact = this.contactForm.value as User;
      console.log('New user created', this.newContact)
    } else {
      console.log('Form invalid')
    }
  }
}
