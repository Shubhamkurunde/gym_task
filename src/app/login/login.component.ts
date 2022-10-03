import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login:FormGroup;


  constructor(private _rest:RestService, private _state:StateService, private _router:Router) {
    this.Login = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      usertype: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
    this._state.checkToken();
  }

  login(){
    this._rest.login(this.Login.value).subscribe((data)=>{
      console.log(data);
      localStorage.setItem('token',(data as any).data);
      this._state.token = (data as any).data;
      this._state.decodetoken();
      console.log(this._state.verified)
      if(this._state.verified['usertype'] == 0){
        this._router.navigate(['trainer']);
      }else if(this._state.verified['usertype'] == 1){
        this._router.navigate(['joiner']);
      }
    },(err)=>{
      alert(err.error.message);
      console.log(err);
    })
  };



}
