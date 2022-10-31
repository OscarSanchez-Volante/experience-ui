import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/interface/account';
import { ResponseEntity } from 'src/app/interface/account copy';
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
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account',new_account, httpOptionsJson); 
  }

}
