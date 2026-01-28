import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
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
  constructor(private registerFB: FormBuilder) {
    this.registerForm = this.registerFB.group({
      userName: ['ABSK'],
      password: [''],
      confirmPassword: [''],
      address: this.registerFB.group({
        city:[''],
        state:[''],
        pincode:['']
      })
    })
   }

  ngOnInit(): void {
  }
  // displayValues() {
  //   this.registerForm.setValue({
  //     userName: "testUser",
  //     password: "testPassword",
  //     confirmPassword: "testPassword",
  //     address: {
  //       city: "testCity",
  //       state: "teststate",
  //       pincode: 123456
  //     }
  //   })
  // }
}
