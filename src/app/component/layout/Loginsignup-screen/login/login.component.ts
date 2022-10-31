import { Component, OnInit,Input} from '@angular/core';
import { LoginService } from '../../../../services/login/login.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{loginInterface} from '../../../../interface/login-interface';
import {signupInterface} from '../../../../interface/login-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  registerFormadmin:FormGroup;
  submitted:boolean = false;
  submitted1:boolean = false;

  public login:loginInterface={email:"",password:"",conformpassword:""};
  public Userentry:boolean=true;
public   password:string|number;
  show:boolean = false;
  loginDetails:{email:boolean | string |number,
    password:string |number};
  public title:string=sessionStorage.getItem('selectedAddOn')
  public userInfo:signupInterface= JSON.parse(sessionStorage.getItem("userInfo"));
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

   this.loginDetails = this.service.login;
   this.password = 'password';
  }

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
          this.Userentry = true; 
        }
  formSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

     if(this.login.email==='useradmin@volante.com'){
      sessionStorage.setItem("userInfo", JSON.stringify(this.login));
      this.userInfo=JSON.parse(sessionStorage.getItem("userInfo"));
      this.Userentry = false; 
      this.Conformpassword=true;
    }
    else if(this.login.email==='paasuseradmin@volante.com'){
      sessionStorage.setItem("userInfo", JSON.stringify(this.login));
      this.userInfo=JSON.parse(sessionStorage.getItem("userInfo"));
      this.Userentry = false; 
      this.Conformpassword=true;
    }
    else if(this.login.email===userInfo.email){
      this.Userentry = false; 
    }
  }
  adminpasswordSubmit(){
    this.submitted1 = true;
    if (this.registerFormadmin.invalid) {
      return;
    }
   
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    if(this.login.password==='adminvolante'){
      this.router.navigate(['admin-user']);  

    }
    else if(this.login.password==='paasadminvolante'){
      this.router.navigate(['sandbox-admin-user']);  

    }
    else if(this.login.password===userInfo.password){
      if(sessionStorage.getItem('service') && sessionStorage.getItem('redirect')){
        if(sessionStorage.getItem('service')=='ADD PAYMENT SERVICES')
        {
          this.router.navigate(['sim-getting-started13.0']);  
        }
        else{
          this.router.navigate(['getting-started-apis1.0']); 
        }
      }
      else{
        this.router.navigate(['select-service1-4.1']);  
      }
       	
    }
    
  }
}
