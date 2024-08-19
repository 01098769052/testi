// import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { eniviroment } from '../../base/enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";


interface Login{
  email:string,
  password:string
}

interface Register {
  name: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
}

eniviroment;
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor(private _HttpClient: HttpClient) {}

  sendRegister(data: Register): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      data
    );
  }

  sendLogin(data:Login):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , data)
  }


  userInform(){
    this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken"))));
    
    
  }
}
