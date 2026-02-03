import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators, FormArray } from '@angular/forms';
import { nameValidator,exactMatchValidator } from '../shared/user-name.validator';
import { passwordValidator } from '../shared/password.validator';
import { FormRegisterService } from '../form-register.service';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  get userName(){
    return this.registerForm.get('userName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get alternateEmails() {
    return this.registerForm.get('alternateEmails') as FormArray;
  }
  registerForm = new FormGroup({
    // userName : new FormControl(''),
    // password : new FormControl(''),
    // confirmPassword : new FormControl(''),
    // address: new FormGroup({
    //   city: new FormControl(''),
    //   state: new FormControl(''),
    //   pincode: new FormControl('')
    // })
  });
  constructor(private registerFB: FormBuilder, private regService : FormRegisterService) {
    
   }

  ngOnInit() {
    this.registerForm = this.registerFB.group({
      userName: ['', [Validators.required, Validators.minLength(3), exactMatchValidator('admin'), nameValidator(/admin/), nameValidator(/password/), nameValidator(/abhi/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.registerFB.group({
        city:[''],
        state:[''],
        pincode:['']
      }), alternateEmails: this.registerFB.array([])
    }, {validator : passwordValidator})
    this.registerForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      const email = this.registerForm.get('email');
      if(checkedValue) {
        email.setValidators(Validators.required);
      } else {
        email.clearValidators;
      }
      email.updateValueAndValidity();
    })
  }
  // displayValues() {
  //   this.registerForm.setValue({
  //     userName: "testUser",
  //     email: "testpassword@mail.com",
  //     subscribe: flase,
  //     password: "testPassword",
  //     confirmPassword: "testPassword",
  //     address: {
  //       city: "testCity",
  //       state: "teststate",
  //       pincode: 123456
  //     }
  //   })
  // }
  onSubmit(registerForm) {
    console.log(registerForm.value);
    this.regService.enrol(this.registerForm.value).subscribe(
      data => console.log('Success!', data)
      
    );
  }
  addAlternateEmail() {
    this.alternateEmails.push(this.registerFB.control(''));
  }

}

