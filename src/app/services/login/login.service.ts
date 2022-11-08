import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/interface/account';
import { LoginData } from 'src/app/interface/login-data';
import { SuccessResponse } from 'src/app/interface/success-response';
import { GlobalConstants, httpOptionsJson } from 'src/app/utilities/globals-constants';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login={email:'volante@gmail.com', password:'1234'}

  constructor(private http:HttpClient) { }

  loginAdmin(logindata: LoginData) {
    return this.http.post<SuccessResponse>(GlobalConstants.ApiUrl + '/account/loginAdmin',logindata, httpOptionsJson); 
  }
  





}
