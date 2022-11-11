import { Component, OnInit } from '@angular/core';
import { AccountLoginDTO } from 'src/app/interface/account-login-dto';
import { LoginData } from 'src/app/interface/login-data';
import { AccountService } from 'src/app/services/account/account.service';
import { GlobalVariables } from 'src/app/utilities/globals-variables';
import { ToastServiceService } from 'src/app/utilities/toast-service/toast-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {


  constructor(private globalvariables: GlobalVariables, private accountServices: AccountService, private toastService: ToastServiceService) { }

  userdata: AccountLoginDTO;

  name: string;
  nameLast: string;

  password="";
  password_confirmation="";
  password_validation="";

  ngOnInit(): void {
    this.userdata = this.globalvariables.currentUser;
    this.name = this.globalvariables.currentUser.userName;
    this.nameLast = this.globalvariables.currentUser.userLastName;
  }

  saveNames() {
    this.accountServices.updateAccountName(this.globalvariables.currentUser.id, this.name, this.nameLast).subscribe(result => {
      this.globalvariables.currentUser.userName = this.name;
      this.globalvariables.currentUser.userLastName = this.nameLast;
      this.toastService.OpenToast(result.success, result.message);
      localStorage.setItem("userdata", JSON.stringify(this.globalvariables.currentUser));
    });
  }


  saveEmail() {
    this.accountServices.updateAccountEmail(this.globalvariables.currentUser.id, this.userdata.email).subscribe(result => {
      this.globalvariables.currentUser.email = this.userdata.email;
      this.toastService.OpenToast(result.success, result.message);
      localStorage.setItem("userdata", JSON.stringify(this.globalvariables.currentUser));
    });
  }

  savePhone() {
    this.accountServices.updateAccountPhone(this.globalvariables.currentUser.id, this.userdata.phone).subscribe(result => {
      this.globalvariables.currentUser.phone = this.userdata.phone;
      this.toastService.OpenToast(result.success, result.message);
      localStorage.setItem("userdata", JSON.stringify(this.globalvariables.currentUser));
    });
  }

  savePassword() {
    this.accountServices.updateAccountPassword(this.globalvariables.currentUser.id, this.password).subscribe(result => {
      this.toastService.OpenToast(result.success, result.message);
    });
  }

  validatePassword() {
    console.log("VALIDANDO");
    if (this.password == "")
      return this.password_validation = "";
    if (this.password.length < 6)
      return this.password_validation = "El password debe ser de almenos 6 caracteres de largo";
    if (this.password != this.password_confirmation)
      return this.password_validation = "El password y la confirmacion deben ser iguales";
    return this.password_validation="";
  }
}
