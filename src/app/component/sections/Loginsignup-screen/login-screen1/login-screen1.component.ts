import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login/login.service";
import { ToastServiceService } from "src/app/utilities/toast-service/toast-service.service";
import { GlobalVariables } from "src/app/utilities/globals-variables";
@Component({
  selector: "app-login-screen1",
  templateUrl: "./login-screen1.component.html",
  styleUrls: ["./login-screen1.component.scss"],
})
export class LoginScreen1Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  password;
  public login: any = {};
  public showAlert: boolean = false;
  show = false;
  loginDetails: { password: any };
  public title = sessionStorage.getItem("selectedAddOn");
  public userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  @Input() count: number = 3;

  constructor(
    private service: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastService: ToastServiceService,
    private globalVariables:GlobalVariables
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    this.loginDetails = this.service.login;
    this.password = "password";
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    /*if (this.password === "password") {
      this.password = "text";
      this.show = true;
    } else {
      this.password = "password";
      this.show = false;
    }*/
  }

  formSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }


    this.service.loginValidatePassword(this.login).subscribe((result) => {
      //this.toastService.OpenToast(result.success,result.message);

      if (result.success) {


        console.log("========= LOGIN CORRECT =========");
        this.globalVariables.currentUser=result.data;
        localStorage.setItem("userdata",JSON.stringify(result.data));

        if (
          sessionStorage.getItem("service") &&
          sessionStorage.getItem("redirect")
        ) {
          if (sessionStorage.getItem("service") == "ADD PAYMENT SERVICES") {
            this.router.navigate(["simGettingStarted13.0"]);
          } else {
            this.router.navigate(["getting-started-apis1.0"]);
          }
        } else {
          this.router.navigate(["select-service1-4.1"]);
        }

        console.log(result);

     

      } else {
        //sessionStorage.setItem("userInfo", "");
        this.toastService.OpenToast(false, "Incorrect password");
      }
    });


    /*if (this.login.password === "adminvolante") {
      this.router.navigate(["adminUser"]);
    } else if (this.login.password === "paasadminvolante") {
      this.router.navigate(["sandboxadminUser"]);
    } else if (this.login.password === userInfo.password) {
      if (
        sessionStorage.getItem("service") &&
        sessionStorage.getItem("redirect")
      ) {
        if (sessionStorage.getItem("service") == "ADD PAYMENT SERVICES") {
          this.router.navigate(["simGettingStarted13.0"]);
        } else {
          this.router.navigate(["gettingStartedAPIs1.0"]);
        }
      } else {
        this.router.navigate(["selectService1-4.1"]);
      }
    }*/
  }
}
