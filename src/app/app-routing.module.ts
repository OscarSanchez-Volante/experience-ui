import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateUIComponent } from './component/layout/Loginsignup-screen/validate-ui/validate-ui.component';
import { TimelineComponent } from './component/layout/timeline/timeline.component';
import { InputWizardComponent } from './component/compositeComponent/Wizard-screen/input-wizard/input-wizard.component';
import { PaymentRailComponent } from './component/compositeComponent/Paymentrail-mainscreens/payment-rail/payment-rail.component';
import { SandboxScreen1Component } from './component/compositeComponent/Sandbox-screens/sandbox-screen1/sandbox-screen1.component';
import { ReportComponent } from './component/compositeComponent/Report-screen/report/report.component';
import { SelectServiceComponentComponent } from './component/compositeComponent/Selectservice-comp/select-service-component/select-service-component.component';
import { Setup2Component } from './component/compositeComponent/Setup-screens/setup2/setup2.component';
import { VolanteSimEndComponent } from './component/layout/Loginsignup-screen/volante-sim-end/volante-sim-end.component';
import { ReviewOrderComponent } from './component/layout/Rails-stepsscreen/review-order/review-order.component';
import { VolMainpageComponent } from './component/compositeComponent/Vol-pages/vol-mainpage/vol-mainpage.component';
import { SimGettingStartedComponent } from './component/compositeComponent/Setup-screens/sim-getting-started/sim-getting-started.component';
import { VolBannerpageComponent } from './component/compositeComponent/Vol-pages/vol-bannerpage/vol-bannerpage.component';
import { RailsSelectedComponent } from './component/layout/Rails-stepsscreen/rails-selected/rails-selected.component';
import { SandboxNodatascreenComponent } from './component/compositeComponent/Sandbox-screens/sandbox-nodatascreen/sandbox-nodatascreen.component';
import { OpsDashboardComponent } from './component/compositeComponent/Dashboard-comp/ops-dashboard/ops-dashboard.component';
import { OpsLinechartComponent } from './component/baseComponent/Charts/ops-linechart/ops-linechart.component';
import { InviteUserscreenComponent } from './component/layout/Loginsignup-screen/invite-userscreen/invite-userscreen.component';
import { ServiceModalComponent } from './component/layout/Modal-popups/service-modal/service-modal.component';
import { PostLoginFtuComponent } from './component/compositeComponent/Post-loginscreen/post-login-ftu/post-login-ftu.component';
import { FtuDashboardscreenComponent } from './component/compositeComponent/Dashboard-comp/ftu-dashboardscreen/ftu-dashboardscreen.component';
import { PostLoginallComponent } from './component/compositeComponent/Post-loginscreen/post-loginall/post-loginall.component'
import { ScheduledReportComponent } from './component/compositeComponent/Report-screen/scheduled-report/scheduled-report.component';
import { ManualReportscreenComponent } from './component/compositeComponent/Report-screen/manual-reportscreen/manual-reportscreen.component';
import { PostLoginFTUAPIComponent } from './component/FTU-PLmessages/message-layoutcomp/post-login-ftu-api/post-login-ftu-api.component';
import { MessageFtudashboardComponent } from './component/FTU-PLmessages/message-layoutcomp/message-ftudashboard/message-ftudashboard.component';
import { MessagingSimStartedComponent } from './component/compositeComponent/Setup-screens/messaging-sim-started/messaging-sim-started.component';
import { FtuSidebarComponent } from './component/layout/Sidebar-layouts/ftu-sidebar/ftu-sidebar.component';
import { FtuLayoutmessageComponent } from './component/FTU-PLmessages/message-layoutcomp/ftu-layoutmessage/ftu-layoutmessage.component';
import { TransformerAPIComponent } from './component/FTU-PLmessages/message-layoutcomp/transformer-api/transformer-api.component';
import { StepperComponent } from './component/baseComponent/Reuse-components/stepper/stepper.component';
import { PartOneComponent } from './component/baseComponent/partOne/partOne.component';
import { PartTwoComponent } from './component/baseComponent/partTwo/partTwo.component';
import { PartThreeComponent } from './component/baseComponent/partThree/partThree.component';
import { TreeviewPartsComponent } from './component/baseComponent/treeview-parts/treeview-parts.component';
import { AdminforUserComponent } from './component/admin-messagingAPI/adminfor-user/adminfor-user.component';
import { AdminuserContentComponent } from './component/admin-messagingAPI/adminuser-content/adminuser-content.component';
import { MessagingDropdownComponent } from './component/FTU-PLmessages/message-basecomp/messaging-creatorsform-dropdown/messaging-dropdown.component';
import { MessagingDropdownTComponent } from './component/FTU-PLmessages/message-basecomp/messaging-transformerform-dropdown/messaging-dropdown-t.component';
import { MessagingDropdownVComponent } from './component/FTU-PLmessages/message-basecomp/messaging-validatorform-dropdown/messaging-dropdown-v.component';
import { AdminUserDetailsComponent } from './component/admin-messagingAPI/admin-user-details/admin-user-details.component';
import { AdminpopupInviteuserComponent } from './component/admin-messagingAPI/adminpopup-inviteuser/adminpopup-inviteuser.component';
import { NodataMsgftudashboardComponent } from './component/FTU-PLmessages/message-layoutcomp/nodata-msgftudashboard/nodata-msgftudashboard.component';
import { ExecutiveDashboardComponent } from './component/compositeComponent/Dashboard-comp/executive-dashboard/executive-dashboard.component';
import { NodataPaasFtudashboardComponent } from './component/compositeComponent/Sandbox-screens/nodata-paas-ftudashboard/nodata-paas-ftudashboard.component';
import {NotificationScreenComponent} from './component/compositeComponent/Sandbox-screens/notification-screen/notification-screen.component'
import { ExecutiveDashboardStep2Component } from './component/compositeComponent/Dashboard-comp/executive-dashboard-step2/executive-dashboard-step2.component'
import { AdminuserSandboxComponent } from './component/admin-PaaSsandbox/adminuser-sandbox/adminuser-sandbox.component';
import { UsercontentSandboxComponent } from './component/admin-PaaSsandbox/usercontent-sandbox/usercontent-sandbox.component';
import { UserdetailsSandboxComponent } from './component/admin-PaaSsandbox/userdetails-sandbox/userdetails-sandbox.component';
import { PopupInviteusersandboxComponent } from './component/admin-PaaSsandbox/popup-inviteusersandbox/popup-inviteusersandbox.component';
import { ActivateAccountScreenComponent } from './component/layout/Loginsignup-screen/activate-userlogin/activate-account-screen/activate-account-screen.component';
import { ActivateLoginComponent } from './component/layout/Loginsignup-screen/activate-userlogin/activate-login/activate-login.component';
import { LoginComponent } from './component/sections/Loginsignup-screen/login/login.component';
import { SignupComponent } from './component/sections/Loginsignup-screen/signup/signup.component';
import { ControlPanelLoginComponent } from './component/controlpanel/control-panel-login/control-panel-login.component';
import { UserAccountComponent } from './sections/user-account/user-account.component';

const routes: Routes = [
//main page routes
{ path: '', component: VolBannerpageComponent },  
{ path: 'select-service0.1', component: VolMainpageComponent },
{ path: 'login0.1', component: LoginComponent },
{ path: 'sign-up2.0', component: SignupComponent },
{ path: 'activate-account-verfication', component: ActivateAccountScreenComponent },
{ path: 'activate-login', component: ActivateLoginComponent },
{ path: 'validate-ui3.0', component: ValidateUIComponent },
{ path: 'select-service4.0', component: TimelineComponent },
{path:'sim-end12.0',component:VolanteSimEndComponent},
{path:'horizontal-timeline',component:StepperComponent},

//sidebar routes
{ path: 'ftu-init-payments11.0', component: InputWizardComponent },
{path:'ftu-paymentrail-14.0',component:PaymentRailComponent},

//main sidebar routes
{path:'select-service1-4.1',component:SelectServiceComponentComponent},
{path:'sim-step2-5.0',component:Setup2Component},
{path:'sim-step3-11.0',component:ReviewOrderComponent},

//getting around routes paas sandbox
{path:'sim-getting-started13.0',component:SimGettingStartedComponent},
{path:'ftu-post-login1.0',component: PostLoginFtuComponent},
{path:'post-loginall',component:PostLoginallComponent},
{path:'getting-started5.0-invite-v2',component: InviteUserscreenComponent},

//getting around routes messagin api
{path:'getting-started-apis1.0',component:MessagingSimStartedComponent},
{path:'ftu-post-loginapi1.0',component:PostLoginFTUAPIComponent},
{path:'tree-view',component:TreeviewPartsComponent},


//admin user screens for messagin API
{
  path: 'admin-user',
  component: AdminforUserComponent,
  children: [
    
      { path: '',   redirectTo: 'admin-for-users1.0', pathMatch: 'full' },
      {
        path: 'admin-for-users1.0',
        component: AdminuserContentComponent
      },
      {
        path: 'admin-for-usersdetails2.0',
        component: AdminUserDetailsComponent
      },
      {
        path: 'admin-invite-users',
        component: AdminpopupInviteuserComponent
      },
  ]
  
},
//admin user screens PaaS sandbox
{
  path: 'sandbox-admin-user',
  component: AdminuserSandboxComponent,
  children: [
    
      { path: '',   redirectTo: 'admin-for-userssandbox1.0', pathMatch: 'full' },
      {
        path: 'admin-for-userssandbox1.0',
        component: UsercontentSandboxComponent
      },
      {
        path: 'admin-for-usersdetailsSandbox2.0',
        component: UserdetailsSandboxComponent
      },
      {
        path: 'admin-invite-userssandbox',
        component: PopupInviteusersandboxComponent
      },
  ]
},


// Dasboard//
{path:'ops-dashboard1.0',component: OpsDashboardComponent},
{path:'control-panel-login',component: ControlPanelLoginComponent},
{path:'user-account',component: UserAccountComponent},
{path:'admin-dashboard1.0',component: ExecutiveDashboardComponent},
{path:'admin-dashboard2.0',component: ExecutiveDashboardStep2Component},

//sidebar header static routes for PaaS sandbox
{
    path: 'ftu-paas',
    component: FtuSidebarComponent,
    children: [
      
      { path: '',   redirectTo: 'notification-screenflow1.0', pathMatch: 'full' },
      
      {
        path: 'notification-screenflow1.0',
        component: FtuDashboardscreenComponent
      },
      {
        path: 'ftu-dashboard',
        component: NodataPaasFtudashboardComponent
      },
      {
        path: 'notification-screenflow2.0',
        component: NotificationScreenComponent
      },
      {
        path: 'ftu-init-payments9.0',
        component: SandboxNodatascreenComponent,
      },
      {path:'ftu-init-payments13.0',component:SandboxScreen1Component},

      {
        path: 'ftu-init-payments13.1',
        component: RailsSelectedComponent
      },
 
      {
        path: 'reports15.0',
        component: ReportComponent
      },

    ]
    
  },
// sidebar and header static routes for messsaging api
  {
    path: 'ftu-messsage-api',
    component: FtuLayoutmessageComponent,
    children: [
      
      { path: '',   redirectTo: 'ftu-dashboard-message4.4', pathMatch: 'full' },
      {
        path: 'ftu-dashboard-message4.4',
        component: MessageFtudashboardComponent
      },
      {
        path: 'ftu-dashboard-message4.3',
        component: NodataMsgftudashboardComponent
      },
      {path:'part-one',component: PartOneComponent},
      {path:'part-two',component: PartTwoComponent},
      {path:'part-three',component: PartThreeComponent},
      {path:'designer-transformer-api1.0',
      component:TransformerAPIComponent},
      { path: 'messaging-dropdown-creators', component:MessagingDropdownComponent},
      { path: 'messaging-dropdown-transformers', component:MessagingDropdownTComponent},
      { path: 'messaging-dropdown-validators', component:MessagingDropdownVComponent},
    ] 
  },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
