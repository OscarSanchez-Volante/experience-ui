import { Component, OnInit } from '@angular/core';
import { InviteService } from '@services/invite/invite.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-invite-userscreen',
  templateUrl: './invite-userscreen.component.html',
  styleUrls: ['./invite-userscreen.component.scss']
})
export class InviteUserscreenComponent implements OnInit {

  registerForm: FormGroup;
data:string;
  submitted = false;
  val : string;
  code:string;
  title1;
  role;
  show = false;
 status:string;
  Title1=[{
    "name":"VolPay"
  },{"name":"Other"}]
  Role=[{
    "name":"End User"
  },{"name":"Other"}]

  inviteDetails: { firstname: any, lastname: any, email: any};
  constructor(private service: InviteService,private router: Router,private formBuilder: FormBuilder) { }

  invite:any={}
  ngOnInit(): void {

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
    this.router.navigate(['validateUI3.0']);

  }
}

