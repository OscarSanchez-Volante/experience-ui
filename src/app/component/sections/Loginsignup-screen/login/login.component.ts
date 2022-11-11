import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login/login.service";
import { ToastServiceService } from "src/app/utilities/toast-service/toast-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public login: any = {};
  public showAlert: boolean = false;
  show = false;
  loginDetails: { email: any };

  constructor(
    private service: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastService: ToastServiceService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ["", Validators.required],
    });
    this.loginDetails = this.service.login;
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {}
  formSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    //var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    this.service.loginValidateEmail(this.login).subscribe((result) => {
      //this.toastService.OpenToast(result.success,result.message);

      if (result.success) {
        sessionStorage.setItem("userInfo", JSON.stringify(this.login));
        //this.router.navigate(['/control-panel-users-table']

        this.router.navigate(["login1.1"]);
        console.log(result);
      } else {
        //sessionStorage.setItem("userInfo", "");
        this.toastService.OpenToast(false, result.message);
      }
    });

    /* if(this.login.email==='useradmin@volante.com'){
      sessionStorage.setItem("userInfo", JSON.stringify(this.login));

      this.router.navigate(['login0.1']);
    }
    else if(this.login.email==='paasuseradmin@volante.com'){
      sessionStorage.setItem("userInfo", JSON.stringify(this.login));

      this.router.navigate(['login0.1']);
    }
    else if(this.login.email===userInfo.email){

      this.router.navigate(['login0.1']);
    }*/
  }
}
