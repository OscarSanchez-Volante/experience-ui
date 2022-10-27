import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@sections/Loginsignup-screen/login/login.component';
import { SignupComponent } from '@sections/Loginsignup-screen/signup/signup.component';
import { ValidateUIComponent } from '@sections/Loginsignup-screen/validate-ui/validate-ui.component';
import { TimelineComponent } from '@partialComponents/timeline/timeline.component';
import { InputWizardComponent } from '@sections/compositeComponent/Wizard-screen/input-wizard/input-wizard.component';
import { PaymentRailComponent } from '@sections/compositeComponent/Paymentrail-mainscreens/payment-rail/payment-rail.component';
import { PaymentRail1Component } from '@sections/compositeComponent/Paymentrail-mainscreens/payment-rail1/payment-rail1.component';
import { PaymentRail2Component } from '@sections/compositeComponent/Paymentrail-mainscreens/payment-rail2/payment-rail2.component';
import { SandboxScreen1Component } from '@sections/compositeComponent/Sandbox-screens/sandbox-screen1/sandbox-screen1.component';
import { ReportComponent } from '@sections/compositeComponent/Report-screen/report/report.component';
import { SelectServiceComponentComponent } from '@sections/compositeComponent/Selectservice-comp/select-service-component/select-service-component.component';
import { Setup2Component } from '@sections/compositeComponent/Setup-screens/setup2/setup2.component';
import { VolanteSimEndComponent } from '@sections/Loginsignup-screen/volante-sim-end/volante-sim-end.component';
import { ReviewOrderComponent } from '@partialComponents/Rails-stepsscreen/review-order/review-order.component';
import { AmbarChartComponent } from '@partialComponents/Charts/ambar-chart/ambar-chart.component';
import { LoginScreen1Component } from '@sections/Loginsignup-screen/login-screen1/login-screen1.component';
import { VolMainpageComponent } from '@sections/compositeComponent/Vol-pages/vol-mainpage/vol-mainpage.component';
import { SimGettingStartedComponent } from '@sections/compositeComponent/Setup-screens/sim-getting-started/sim-getting-started.component';
import { VolBannerpageComponent } from '@sections/compositeComponent/Vol-pages/vol-bannerpage/vol-bannerpage.component';
import { RailsSelectedComponent } from '@partialComponents/Rails-stepsscreen/rails-selected/rails-selected.component';
import { SandboxNodatascreenComponent } from '@sections/compositeComponent/Sandbox-screens/sandbox-nodatascreen/sandbox-nodatascreen.component';
import { OpsDashboardComponent } from '@sections/compositeComponent/Dashboard-comp/ops-dashboard/ops-dashboard.component';
import { OpsLinechartComponent } from '@partialComponents/Charts/ops-linechart/ops-linechart.component';
import { InviteUserscreenComponent } from '@sections/Loginsignup-screen/invite-userscreen/invite-userscreen.component';
import { ServiceModalComponent } from '@partialComponents/Modal-popups/service-modal/service-modal.component';
import { PostLoginFtuComponent } from '@sections/compositeComponent/Post-loginscreen/post-login-ftu/post-login-ftu.component';
import { FtuDashboardscreenComponent } from '@sections/compositeComponent/Dashboard-comp/ftu-dashboardscreen/ftu-dashboardscreen.component';
import { PostLoginallComponent } from '@sections/compositeComponent/Post-loginscreen/post-loginall/post-loginall.component'
import { ScheduledReportComponent } from '@sections/compositeComponent/Report-screen/scheduled-report/scheduled-report.component';
import { ManualReportscreenComponent } from '@sections/compositeComponent/Report-screen/manual-reportscreen/manual-reportscreen.component';
import { PostLoginFTUAPIComponent } from '@sections/FTU-PLmessages/message-layoutcomp/post-login-ftu-api/post-login-ftu-api.component';
import { MessageFtudashboardComponent } from '@sections/FTU-PLmessages/message-layoutcomp/message-ftudashboard/message-ftudashboard.component';
import { MessagingSimStartedComponent } from '@sections/compositeComponent/Setup-screens/messaging-sim-started/messaging-sim-started.component';
import { FtuSidebarComponent } from '@partialComponents/Sidebar-layouts/ftu-sidebar/ftu-sidebar.component';
import { FtuLayoutmessageComponent } from '@sections/FTU-PLmessages/message-layoutcomp/ftu-layoutmessage/ftu-layoutmessage.component';
import { TransformerAPIComponent } from '@sections/FTU-PLmessages/message-layoutcomp/transformer-api/transformer-api.component';
import { StepperComponent } from '@partialComponents/Reuse-components/stepper/stepper.component';
import { PartOneComponent } from '@partialComponents/partOne/partOne.component';
import { PartTwoComponent } from '@partialComponents/partTwo/partTwo.component';
import { PartThreeComponent } from '@partialComponents/partThree/partThree.component';
import { TreeviewPartsComponent } from '@partialComponents/treeview-parts/treeview-parts.component';
import { AdminforUserComponent } from '@sections/admin-messagingAPI/adminfor-user/adminfor-user.component';
import { AdminuserContentComponent } from '@sections/admin-messagingAPI/adminuser-content/adminuser-content.component';
import { MessagingDropdownComponent } from '@sections/FTU-PLmessages/message-basecomp/messaging-creatorsform-dropdown/messaging-dropdown.component';
import { MessagingDropdownTComponent } from '@sections/FTU-PLmessages/message-basecomp/messaging-transformerform-dropdown/messaging-dropdown-t.component';
import { MessagingDropdownVComponent } from '@sections/FTU-PLmessages/message-basecomp/messaging-validatorform-dropdown/messaging-dropdown-v.component';
import { AdminUserDetailsComponent } from '@sections/admin-messagingAPI/admin-user-details/admin-user-details.component';
import { AdminpopupInviteuserComponent } from '@sections/admin-messagingAPI/adminpopup-inviteuser/adminpopup-inviteuser.component';
import { NodataMsgftudashboardComponent } from '@sections/FTU-PLmessages/message-layoutcomp/nodata-msgftudashboard/nodata-msgftudashboard.component';
import { ExecutiveDashboardComponent } from '@sections/compositeComponent/Dashboard-comp/executive-dashboard/executive-dashboard.component';
import { NodataPaasFtudashboardComponent } from '@sections/compositeComponent/Sandbox-screens/nodata-paas-ftudashboard/nodata-paas-ftudashboard.component';
import {NotificationScreenComponent} from '@sections/compositeComponent/Sandbox-screens/notification-screen/notification-screen.component'
import { ExecutiveDashboardStep2Component } from '@sections/compositeComponent/Dashboard-comp/executive-dashboard-step2/executive-dashboard-step2.component'
import { AdminuserSandboxComponent } from '@sections/admin-PaaSsandbox/adminuser-sandbox/adminuser-sandbox.component';
import { UsercontentSandboxComponent } from '@sections/admin-PaaSsandbox/usercontent-sandbox/usercontent-sandbox.component';
import { UserdetailsSandboxComponent } from '@sections/admin-PaaSsandbox/userdetails-sandbox/userdetails-sandbox.component';
import { PopupInviteusersandboxComponent } from '@sections/admin-PaaSsandbox/popup-inviteusersandbox/popup-inviteusersandbox.component';

const routes: Routes = [
//main page routes
{ path: '', component: VolBannerpageComponent },
{ path: 'selectService0.1', component: VolMainpageComponent },
{ path: 'login0.1', component: LoginComponent },
{ path: 'login1.1', component: LoginScreen1Component },
{ path: 'signUp2.0', component: SignupComponent },
{ path: 'validateUI3.0', component: ValidateUIComponent },
{ path: 'selectService4.0', component: TimelineComponent },
{path:'simEnd12.0',component:VolanteSimEndComponent},
{path:'horizontalTimeline',component:StepperComponent},

//sidebar routes
{ path: 'ftuInitPayments11.0', component: InputWizardComponent },
{path:'ftuPaymentRail-14.0',component:PaymentRailComponent},
{path:'ftuPaymentRail-14.1',component:PaymentRail1Component},
{path:'ftuPaymentRail-14.2',component:PaymentRail2Component},

//main sidebar routes
{path:'selectService1-4.1',component:SelectServiceComponentComponent},
{path:'simStep2-5.0',component:Setup2Component},
{path:'simStep3-11.0',component:ReviewOrderComponent},

//getting around routes paas sandbox
{path:'simGettingStarted13.0',component:SimGettingStartedComponent},
{path:'ftuPostLogin1.0',component: PostLoginFtuComponent},
{path:'postLoginall',component:PostLoginallComponent},
{path:'gettingStarted5.0-invite-v2',component: InviteUserscreenComponent},

//getting around routes messagin api
{path:'gettingStartedAPIs1.0',component:MessagingSimStartedComponent},
{path:'ftuPostLoginAPI1.0',component:PostLoginFTUAPIComponent},
{path:'treeView',component:TreeviewPartsComponent},


//admin user screens for messagin API
{
  path: 'adminUser',
  component: AdminforUserComponent,
  children: [

      { path: '',   redirectTo: 'adminForUsers1.0', pathMatch: 'full' },
      {
        path: 'adminForUsers1.0',
        component: AdminuserContentComponent
      },
      {
        path: 'adminForUsersdetails2.0',
        component: AdminUserDetailsComponent
      },
      {
        path: 'adminInviteUsers',
        component: AdminpopupInviteuserComponent
      },
  ]

},
//admin user screens PaaS sandbox
{
  path: 'sandboxadminUser',
  component: AdminuserSandboxComponent,
  children: [

      { path: '',   redirectTo: 'adminForUsersSandbox1.0', pathMatch: 'full' },
      {
        path: 'adminForUsersSandbox1.0',
        component: UsercontentSandboxComponent
      },
      {
        path: 'adminForUsersdetailsSandbox2.0',
        component: UserdetailsSandboxComponent
      },
      {
        path: 'adminInviteUsersSandbox',
        component: PopupInviteusersandboxComponent
      },
  ]
},


// Dasboard//
{path:'opsDashboard1.0',component: OpsDashboardComponent},
{path:'AdminDashboard1.0',component: ExecutiveDashboardComponent},
{path:'AdminDashboard2.0',component: ExecutiveDashboardStep2Component},

//sidebar header static routes for PaaS sandbox
{
    path: 'ftuPaaS',
    component: FtuSidebarComponent,
    children: [

      { path: '',   redirectTo: 'notificationScreenflow1.0', pathMatch: 'full' },

      {
        path: 'notificationScreenflow1.0',
        component: FtuDashboardscreenComponent
      },
      {
        path: 'ftuDashboard',
        component: NodataPaasFtudashboardComponent
      },
      {
        path: 'notificationScreenflow2.0',
        component: NotificationScreenComponent
      },
      {
        path: 'ftuInitPayments9.0',
        component: SandboxNodatascreenComponent,
      },
      {path:'ftuInitPayments13.0',component:SandboxScreen1Component},

      {
        path: 'ftuInitPayments13.1',
        component: RailsSelectedComponent
      },

      {
        path: 'Reports15.0',
        component: ReportComponent
      },
      {
        path: 'scheduleReports16.0',
        component: ScheduledReportComponent
      },
      {
        path: 'manualReports18.0',
        component: ManualReportscreenComponent
      },

    ]

  },
// sidebar and header static routes for messsaging api
  {
    path: 'ftuMesssageAPI',
    component: FtuLayoutmessageComponent,
    children: [

      { path: '',   redirectTo: 'ftuDashboardMessage4.4', pathMatch: 'full' },
      {
        path: 'ftuDashboardMessage4.4',
        component: MessageFtudashboardComponent
      },
      {
        path: 'ftuDashboardMessage4.3',
        component: NodataMsgftudashboardComponent
      },
      {path:'partOne',component: PartOneComponent},
      {path:'partTwo',component: PartTwoComponent},
      {path:'partThree',component: PartThreeComponent},
      {path:'DesignerTransformerApi1.0',
      component:TransformerAPIComponent},
      { path: 'MessagingDropdownCreators', component:MessagingDropdownComponent},
      { path: 'MessagingDropdownTransformers', component:MessagingDropdownTComponent},
      { path: 'MessagingDropdownValidators', component:MessagingDropdownVComponent},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
