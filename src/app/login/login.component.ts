import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {ControlGroup} from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin :FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formlogin = this._formBuilder.group({
      Email:['rehab333@gmail.com',[Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(30)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      mobile:['012245879',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(11)]]
    
    })
  }

  login()
  {
    console.log(JSON.stringify(this.formlogin.value));
    console.log(this.formlogin.value)
  }

}
