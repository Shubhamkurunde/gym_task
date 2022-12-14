import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http:HttpClient) { }

Signup(data:any){
  return this._http.post(environment.url + '/signup',data);
};

login(data:any){
  return this._http.post(environment.url + '/login',data);
};

get_single_id(id:number){
    return this._http.get(environment.url + '/get_single_id' + id) 
};

}
