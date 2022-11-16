import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/interface/account';
import { ResponseEntity } from 'src/app/interface/account copy';
import { AccountResponse } from 'src/app/interface/account-response';
import * as internal from 'stream';
import { GlobalConstants, httpOptionsJson } from '../../utilities/globals-constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  deleteAccount(id: string) {
    console.log(id);
    return this.http.delete<ResponseEntity>(GlobalConstants.ApiUrl + 'account/' + id);
  }

  updateAccountStatus(id: string, status: string) {
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account/updateAccountStatus', { id: id, newvalue: status }, httpOptionsJson);
  }

  constructor(private http: HttpClient) { }

  getAllAccounts(page: number, orderBy: string, sortDir: string) {
    var urlData = "?size=5";
    if (page != 0)
      urlData += "&page=" + page;
    if (orderBy != '')
      urlData += "&orderBy=" + orderBy;
    if (sortDir != '')
      urlData += "&sortDir=" + sortDir;

    return this.http.get<AccountResponse>(GlobalConstants.ApiUrl + 'account' + urlData, httpOptionsJson);
  }

  createAccount(new_account: Account) {
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account', new_account, httpOptionsJson);
  }
  //name") String name,@PathVariable("lastname"
  updateAccountName(id: string, name: string, lastname: string) {
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account/updateAccountName', { id: id, name: name, lastname: lastname }, httpOptionsJson);
  }
  updateAccountEmail(id: string, newvalue: string) {
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account/updateAccountEmail', { id: id, newvalue: newvalue }, httpOptionsJson);
  }
  updateAccountPhone(id: string, newvalue: string) {
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account/updateAccountPhone', { id: id, newvalue: newvalue }, httpOptionsJson);
  }
  updateAccountPassword(id: string, newvalue: string) {
    return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account/updateAccountPassword', { id: id, newvalue: newvalue }, httpOptionsJson);
  }



  // @PostMapping("/updateAccountEmail")
  // public ResponseEntity<?> updateAccountEmail(@RequestBody updateAccountData data){
  // 	return new ResponseEntity<>(accountService.updateAccountEmail(data.id,data.newvalue), HttpStatus.OK);
  //   }

  // @PostMapping("/updateAccountPhone")
  // public ResponseEntity<?> updateAccountPhone(@RequestBody updateAccountData data){
  // 	return new ResponseEntity<>(accountService.updateAccountPhone(data.id,data.newvalue), HttpStatus.OK);
  //   }

  // @PostMapping("/updateAccountPassword")
  // public ResponseEntity<?> updateAccountPassword(@RequestBody updateAccountData data){
  // 	return new ResponseEntity<>(accountService.updateAccountPassword(data.id,data.newvalue), HttpStatus.OK);
  //   }

  // createAccount(new_account:Account) {
  //   return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account',new_account, httpOptionsJson); 
  // }

  // createAccount(new_account:Account) {
  //   return this.http.post<ResponseEntity>(GlobalConstants.ApiUrl + 'account',new_account, httpOptionsJson); 
  // }

}
