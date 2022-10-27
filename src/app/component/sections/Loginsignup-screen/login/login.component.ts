import { Component, OnInit } from '@angular/core';
import { LoginService } from '@services/login/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public login:any={};
  public showAlert:boolean=false;
  show = false;
  loginDetails:{email:any};
  constructor(private service: LoginService,private router: Router,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
  });

   this.loginDetails = this.service.login;
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {


        }
  formSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

     if(this.login.email==='useradmin@volante.com'){
      sessionStorage.setItem("userInfo", JSON.stringify(this.login));

      this.router.navigate(['login1.1']);
    }
    else if(this.login.email==='paasuseradmin@volante.com'){
      sessionStorage.setItem("userInfo", JSON.stringify(this.login));

      this.router.navigate(['login1.1']);
    }
    else if(this.login.email===userInfo.email){

      this.router.navigate(['login1.1']);
    }
  }
}
