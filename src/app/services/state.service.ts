import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class StateService {
 token = '';
 verified :any;
  constructor(private _router:Router) { }

  decodetoken(){
    this.verified = jwt_decode(this.token);
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.decodetoken();
    } else {
      this._router.navigate(['/login']);
    }
  };

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

}
