import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/interface/account';
import { GlobalConstants, httpOptionsJson } from '../../utilities/globals-constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAllAccounts() {
    return this.http.get<Account[]>(GlobalConstants.ApiUrl + 'account', httpOptionsJson); 
  }

  createAccount(new_account:Account) {
    return this.http.post<Account>(GlobalConstants.ApiUrl + 'account',new_account, httpOptionsJson); 
  }

}
