import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../../../services/login/login.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ConfirmPasswordValidator} from '../../../../../services/confirm-password.validator'
import{loginInterface} from '../../../../../interface/login-interface'
@Component({
  selector: 'app-activate-login',
  templateUrl: './activate-login.component.html',
  styleUrls: ['./activate-login.component.scss']
})
export class ActivateLoginComponent implements OnInit {

  registerForm: FormGroup;
  registerForm1: FormGroup;
  registerFormadmin:FormGroup
  submitted = false;
  submitted1 = false;
  submitted2 = false;


  public login:loginInterface={email:"",password:"",conformpassword:""};
  public showAlert:boolean=false;
  public Activatelogin:boolean=true;

  show = false;
  loginDetails:{email:boolean | string |number,
    password:string |number};
  password;
  public title=sessionStorage.getItem('selectedAddOn')
  public userInfo= JSON.parse(sessionStorage.getItem("userInfo"));
  public Conformpassword:boolean=false;


  @Input() count:number=3;
  constructor(private service: LoginService,private router: Router,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],  
 
  });
  this.registerFormadmin = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
},
);
  this.registerForm1 = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpassword: ["",Validators.required]
},
{
  validator: ConfirmPasswordValidator("password", "confirmpassword")
});

   this.loginDetails = this.service.login;
   this.password = 'password';
  }

  get f() { return this.registerForm1.controls; }
  get fuser(){return this.registerForm.controls;}
get fadmin(){return this.registerFormadmin.controls;}
    onSubmit() {

      if (this.password === 'password') {
        this.password = 'text';
        this.show = true;
      } else {
        this.password = 'password';
        this.show = false;
      }      
        }
        loginback(){
          this.Activatelogin = true; 
        }
  activateSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    
     if(this.login.email==='abc.volante@xyz.com'){
      this.Activatelogin = false; 
    }
  }
  passwordSubmit(){
    this.submitted2 = true;
    if (this.registerForm1.invalid) {
      return;
    }
    
  }
  codeSubmit(){
    this.submitted1 = true;
    if (this.registerFormadmin.invalid) {
      return;
    }
   

    if(this.login.password==='123456'){
this.Conformpassword=true;
    }
    
  } 
}
