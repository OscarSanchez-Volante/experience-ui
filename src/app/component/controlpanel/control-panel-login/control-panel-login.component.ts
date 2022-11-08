import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interface/login-data';
import { LoginService } from 'src/app/services/login/login.service';
import { ToastServiceService } from 'src/app/utilities/toast-service/toast-service.service';

@Component({
  selector: 'app-control-panel-login',
  templateUrl: './control-panel-login.component.html',
  styleUrls: ['./control-panel-login.component.css']
})
export class ControlPanelLoginComponent implements OnInit {

  registerForm: FormGroup;
  login:LoginData={
    email:"",
    password:""
  };
  submitted = false;
  password;
  email;
  show = false;

  get f() { return this.registerForm.controls; }


  constructor(private service: LoginService, 
    private router: Router,
     private formBuilder: FormBuilder, 
     private toastService:ToastServiceService) { 
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }


  }
  formSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.service.loginAdmin(this.login).subscribe(result=>{
      this.toastService.OpenToast(result.success,result.message);
      if(result.success)
        this.router.navigate(['/control-panel-users-table'])
      console.log(result);
    });

    //var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    // if(this.login.password==='adminvolante'){
    //   this.router.navigate(['adminUser']);

    // }
    // else if(this.login.password==='paasadminvolante'){
    //   this.router.navigate(['sandboxadminUser']);

    // }
    // else if(this.login.password===userInfo.password){
    //   if(sessionStorage.getItem('service') && sessionStorage.getItem('redirect')){
    //     if(sessionStorage.getItem('service')=='ADD PAYMENT SERVICES')
    //     {
    //       this.router.navigate(['simGettingStarted13.0']);
    //     }
    //     else{
    //       this.router.navigate(['gettingStartedAPIs1.0']);
    //     }
    //   }
    //   else{
    //     this.router.navigate(['selectService1-4.1']);
    //   }

    // }

  }

}
