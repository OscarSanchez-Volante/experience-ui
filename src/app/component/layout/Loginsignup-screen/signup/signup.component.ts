import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../../services/signup/signup.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {signupInterface} from '../../../../interface/login-interface'
import{ConfirmPasswordValidator} from '../../../../services/confirm-password.validator'
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
data:string;
  submitted = false;
  val : string;
  code:string;
  password;
  title;
  show = false;
 status:string;
 Country;
 Title;

 signupDetails: {institutionname: string, firstname: string, lastname: string, email: boolean|string|Number, password:string|number};
 constructor(private service: SignupService,private router: Router,private formBuilder: FormBuilder,private jsonhttp:JsonHttpService) { }
 
 signup:any={}  
  //  signup:signupInterface={institutionName: "", firstName: "", lastName: "", email: "", password:"",contactNumber:"",country:"",title1:"",title:""}
  ngOnInit(): void {
    this.jsonhttp.getsignup("assets/data/admin.json").subscribe(data => {
      this.Country = data['Country']
      this.Title = data['Title']
    })
    this.signupDetails = this.service.signup;
    this.password = 'password';

    this.registerForm = this.formBuilder.group({
      institutionName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],    
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      conNumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      confirmpassword: ["",Validators.required]
  },
  {
    validator: ConfirmPasswordValidator("password", "confirmpassword")
  });
  }
  selectCountry(val:number){
    for(let i=0;i< this.Country.length;i++){
        if(this.Country[i].name==val){          
        
          this.code=this.Country[i].dial_code;
         
        }
    }
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
    sessionStorage.setItem("userInfo", JSON.stringify(this.signup));

    this.router.navigate(['validate-ui3.0']);    	
    
  }

   mobileNumber(event: KeyboardEvent) {

    var inp = String.fromCharCode(event.keyCode);
 
    if (/[0-9]/.test(inp)) {
        

             return true;   
        
    
    } else {
      event.preventDefault();
      return false;
    }}
}




