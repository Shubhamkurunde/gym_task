import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signup: FormGroup;

  constructor(private _rest:RestService) {
    this.signup = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      address: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      age : new FormControl('',[Validators.required,Validators.maxLength(2)]),
      username : new FormControl('',[Validators.required,Validators.minLength(4)]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
      usertype: new FormControl('',[Validators.required,Validators.maxLength(2)])
    })
   }

  ngOnInit(): void {
  }

  Signup(){
    this._rest.Signup(this.signup.value).subscribe((data)=>{
      console.log(data);
      alert('Signup Succesfully')
    },(err)=>{
      console.log(err);
      alert('Something went wrong')
    })
  }

}
