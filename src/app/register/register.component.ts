import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formregister:FormGroup
  constructor( private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formregister = this._formBuilder.group({
      Email:['rehab333@gmail.com',[Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(30)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      mobile:['012245879',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(11)]],
      fullname:['',[Validators.required,Validators.maxLength(30)]]

    })
  }


}
