import { Component, OnInit } from '@angular/core';
import { InviteService } from '../../../../services/invite/invite.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import{inviteuserInterface} from '../../../../interface/login-interface'

@Component({
  selector: 'app-invite-userscreen',
  templateUrl: './invite-userscreen.component.html',
  styleUrls: ['./invite-userscreen.component.scss']
})
export class InviteUserscreenComponent implements OnInit {

  registerForm: FormGroup;
  invitedata:string;
  submitted = false;
  val : string;
  code:string;
  show = false;
 status:string;
  Title1:string;
  Role:string;
 
  inviteDetails: {firstname: string, lastname: string, email: string|number};
  constructor(private service: InviteService,private router: Router,private formBuilder: FormBuilder,private jsonhttp:JsonHttpService) { }
  
  invite:inviteuserInterface={title1:"",role:"",firstName: "", lastName: "", email: ""};
  ngOnInit(): void {
    this.jsonhttp.getinviteUser("assets/data/admin.json").subscribe(invitedata => {
      this.Title1 = invitedata['TitleInviteUser'];
      this.Role = invitedata['RoleInviteUser'];
    })
    this.inviteDetails = this.service.invite;

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title1: ['', Validators.required],
      role: ['', Validators.required],

  });
  }
  get f() { return this.registerForm.controls; }

  formSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    sessionStorage.setItem("userInfo", JSON.stringify(this.invite));
    this.router.navigate(['validate-ui3.0']);    	
    
  }
}

