import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signup: FormGroup;

  constructor(private _rest:RestService, private _router:Router) {
    this.signup = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      address: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10), Validators.pattern('[0-9]')]),
      age : new FormControl('',[Validators.required,Validators.maxLength(2)]),
      username : new FormControl('',[Validators.required,Validators.minLength(4)]),
      password: new FormControl('',[Validators.required,Validators.minLength(4), Validators.pattern('[a-zA-Z.*]')]),
      usertype: new FormControl('',[Validators.required,Validators.maxLength(2)])
    })
   }

  ngOnInit(): void {
  }

  Signup(){
    this._rest.Signup(this.signup.value).subscribe((data)=>{
      console.log(data);
      alert('Signup Succesfully');
      this._router.navigate(['/login'])

    },(err)=>{
      console.log(err);
      alert('Something went wrong')
    })
  }

  get name(): FormControl {
    return this.signup.get("name") as FormControl;
  }
  get address():FormControl {
    return this.signup.get("address") as FormControl;
  }

  get mobile(): FormControl {
     return this.signup.get("mobile") as FormControl;
  }

  get age(): FormControl {
    return this.signup.get("age") as FormControl;
  }

  get username(): FormControl {
    return this.signup.get("username") as FormControl;
  }
  
  get password(): FormControl {
    return this.signup.get("password") as FormControl;
  }

  get usertype(): FormControl {
    return this.signup.get("usertype") as FormControl;
  }



}
