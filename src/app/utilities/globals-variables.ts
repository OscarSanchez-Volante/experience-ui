import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountLoginDTO } from '../interface/account-login-dto';
import { LoginData } from '../interface/login-data';


@Injectable({
  providedIn: 'root'
})


export class GlobalVariables{
  
  constructor() { }
  public currentUser: AccountLoginDTO =null;

}




