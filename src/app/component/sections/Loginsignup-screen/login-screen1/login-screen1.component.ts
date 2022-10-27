import { Component, OnInit ,Input} from '@angular/core';
import { LoginService } from '@services/login/login.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-screen1',
  templateUrl: './login-screen1.component.html',
  styleUrls: ['./login-screen1.component.scss']
})
export class LoginScreen1Component implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  password;
  public login:any={};
  public showAlert:boolean=false;
  show = false;
  loginDetails:{ password:any};
  public title=sessionStorage.getItem('selectedAddOn')
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  @Input() count:number=3;
  constructor(private service: LoginService,private router: Router,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],

  });


    this.loginDetails = this.service.login;
    this.password = 'password';
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {

        if (this.password === 'password') {
          this.password = 'text';
          this.show = true;
        } else {
          this.password = 'password';
          this.show = false;
        }


        }
  formSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if(this.login.password==='adminvolante'){
      this.router.navigate(['adminUser']);

    }
    else if(this.login.password==='paasadminvolante'){
      this.router.navigate(['sandboxadminUser']);

    }
    else if(this.login.password===userInfo.password){
      if(sessionStorage.getItem('service') && sessionStorage.getItem('redirect')){
        if(sessionStorage.getItem('service')=='ADD PAYMENT SERVICES')
        {
          this.router.navigate(['simGettingStarted13.0']);
        }
        else{
          this.router.navigate(['gettingStartedAPIs1.0']);
        }
      }
      else{
        this.router.navigate(['selectService1-4.1']);
      }

    }

  }
}
