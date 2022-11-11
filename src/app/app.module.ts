////modules//////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { HttpClientModule } from '@angular/common/http';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NguCarouselModule } from '@ngu/carousel';
import { HighchartsChartModule } from 'highcharts-angular';
import { CalendarModule } from 'primeng/calendar';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { Toast, ToastrModule } from 'ngx-toastr';
import * as echarts from 'echarts';
/*Base component*/
/////////Sidebarbase-comp///////
import { TimelineTabComponent } from './component/baseComponent/Sidebarbase-comp/timeline-tab/timeline-tab.component';
import { SidebarDropdownComponent } from './component/baseComponent/Sidebarbase-comp/sidebar-dropdown/sidebar-dropdown.component';
import { SidebarTableComponent } from './component/baseComponent/Sidebarbase-comp/sidebar-table/sidebar-table.component';
import { TimebarComponent } from './component/baseComponent/Sidebarbase-comp/timebar/timebar.component';
import { TimelineBarComponent } from './component/baseComponent/Sidebarbase-comp/timeline-bar/timeline-bar.component';

///////Reuse-components///////
import { SwitchButtonComponent } from './component/baseComponent/Reuse-components/switch-button/switch-button.component';
import { StepperComponent } from './component/baseComponent/Reuse-components/stepper/stepper.component';
import { PartOneComponent } from './component/baseComponent/partOne/partOne.component';
import { PartTwoComponent } from './component/baseComponent/partTwo/partTwo.component';
import { PartThreeComponent } from './component/baseComponent/partThree/partThree.component';
import { TreeviewPartsComponent } from './component/baseComponent/treeview-parts/treeview-parts.component';
////////Table-comp///////
import { TableComponent } from './component/baseComponent/Table-comp/table/table.component';
import { TreeTableComponent } from './component/baseComponent/Table-comp/tree-table/tree-table.component';

/////////Header-comp//////
import { HeaderComponent } from './component/baseComponent/Header-comp/header/header.component';
import { HeaderStartComponent } from './component/baseComponent/Header-comp/header-start/header-start.component';
import { OpsHeaderComponent } from './component/baseComponent/Header-comp/ops-header/ops-header.component';

///////Rails-comp///////
import { PaymentRailsComponent } from './component/baseComponent/Rails-comp/payment-rails/payment-rails.component';
import { RailAccordionComponent } from './component/baseComponent/Rails-comp/rail-accordion/rail-accordion.component';

///////charts//////////
import { LineChartComponent } from './component/baseComponent/Charts/line-chart/line-chart.component';
import { BarChartComponent } from './component/baseComponent/Charts/bar-chart/bar-chart.component';
import { NewBarchartComponent } from './component/baseComponent/Charts/new-barchart/new-barchart.component';
import { DoughnutChartsComponent } from './component/baseComponent/Charts/doughnut-charts/doughnut-charts.component';
import { EChartComponent } from './component/baseComponent/Charts/e-chart/e-chart.component';
import { BarChart1Component } from './component/baseComponent/Charts/bar-chart1/bar-chart1.component';
import { OpsLinechartComponent } from './component/baseComponent/Charts/ops-linechart/ops-linechart.component';
import { OpsBarchartComponent } from './component/baseComponent/Charts/ops-barchart/ops-barchart.component';
import { BoxPlotChartComponent } from './component/baseComponent/Charts/box-plot-chart/box-plot-chart.component';
import { HorizontalBarchartComponent } from './component/baseComponent/Charts/horizontal-barchart/horizontal-barchart.component';
import { ScatterChartComponent } from './component/baseComponent/Charts/scatter-chart/scatter-chart.component';
import { HeatmapChartComponent } from './component/baseComponent/Charts/heatmap-chart/heatmap-chart.component';
import { WorldMapchartComponent } from './component/baseComponent/Charts/world-mapchart/world-mapchart.component';

////////Box-comp////////
import { VolanteMsgBoxComponent } from './component/baseComponent/Box-comp/volante-msg-box/volante-msg-box.component';

///////Smallcard-comp///////
import { SmallCardComponent } from './component/baseComponent/Smallcard-comp/small-card/small-card.component';
import { CarouselSmallcardComponent } from './component/baseComponent/Smallcard-comp/carousel-smallcard/carousel-smallcard.component';
import { CarouselSmallcard1Component } from './component/baseComponent/Smallcard-comp/carousel-smallcard1/carousel-smallcard1.component';
/////////Messagebasecomp///////
import { MessagesetupSidebarComponent } from './component/baseComponent/Messagebasecomp/messagesetup-sidebar/messagesetup-sidebar.component';
import { MessagesetupTableComponent } from './component/baseComponent/Messagebasecomp/messagesetup-table/messagesetup-table.component';

import { NoDataoutputComponent } from './component/baseComponent/no-dataoutput/no-dataoutput.component';
import { CarouselSimstartedComponent } from './component/baseComponent/carousel-simstarted/carousel-simstarted.component';
import { MessagingCarousalComponent } from './component/baseComponent/messaging-carousal/messaging-carousal.component';
/*Composite component*/
//////// Dashboard-comp////////
import { OpsDashboardComponent } from './component/compositeComponent/Dashboard-comp/ops-dashboard/ops-dashboard.component';
import { FtuDashboardscreenComponent } from './component/compositeComponent/Dashboard-comp/ftu-dashboardscreen/ftu-dashboardscreen.component';
import { ExecutiveDashboardComponent } from './component/compositeComponent/Dashboard-comp/executive-dashboard/executive-dashboard.component';

//////////Paymentrail-mainscreens////////
import { PaymentRailComponent } from './component/compositeComponent/Paymentrail-mainscreens/payment-rail/payment-rail.component';
/////////Setup-screens/////////
import { SimGettingStartedComponent } from './component/compositeComponent/Setup-screens/sim-getting-started/sim-getting-started.component';
import { MessagingSimStartedComponent } from './component/compositeComponent/Setup-screens/messaging-sim-started/messaging-sim-started.component';
import { Setup2Component } from './component/compositeComponent/Setup-screens/setup2/setup2.component';
////////Sandbox-screens///////
import { SandboxScreen1Component } from './component/compositeComponent/Sandbox-screens/sandbox-screen1/sandbox-screen1.component';
import { SandboxNodatascreenComponent } from './component/compositeComponent/Sandbox-screens/sandbox-nodatascreen/sandbox-nodatascreen.component';
///////Report-screen///////
import { ReportComponent } from './component/compositeComponent/Report-screen/report/report.component';
import { ScheduledReportComponent } from './component/compositeComponent/Report-screen/scheduled-report/scheduled-report.component';
import { ManualReportscreenComponent } from './component/compositeComponent/Report-screen/manual-reportscreen/manual-reportscreen.component';

/////Vol-pages///////
import { VolMainpageComponent } from './component/compositeComponent/Vol-pages/vol-mainpage/vol-mainpage.component';
import { VolBannerpageComponent } from './component/compositeComponent/Vol-pages/vol-bannerpage/vol-bannerpage.component';
///////Selectservice-comp//////
import { SelectServiceComponentComponent } from './component/compositeComponent/Selectservice-comp/select-service-component/select-service-component.component';
import { MainpageSelectserviceComponent } from './component/compositeComponent/Selectservice-comp/mainpage-selectservice/mainpage-selectservice.component';
///////Post-loginscreen//////
import { PostLogin1Component } from './component/compositeComponent/Post-loginscreen/post-login1/post-login1.component';
import { PostLoginFtuComponent } from './component/compositeComponent/Post-loginscreen/post-login-ftu/post-login-ftu.component';
import { PostLoginallComponent } from './component/compositeComponent/Post-loginscreen/post-loginall/post-loginall.component';

//////Wizard-screen////////
import { InputWizardComponent } from './component/compositeComponent/Wizard-screen/input-wizard/input-wizard.component';

/* Layout component*/
//////Loginsignup-screen///////
import { InviteUserscreenComponent } from './component/layout/Loginsignup-screen/invite-userscreen/invite-userscreen.component';
import { ValidateUIComponent } from './component/layout/Loginsignup-screen/validate-ui/validate-ui.component';
import { VolanteSimEndComponent } from './component/layout/Loginsignup-screen/volante-sim-end/volante-sim-end.component';

//////Sidebar-layouts//////
import { SidebarComponent } from './component/layout/Sidebar-layouts/sidebar/sidebar.component';
import { SideNavbarComponent } from './component/layout/Sidebar-layouts/side-navbar/side-navbar.component';
import { ReportSidebarComponent } from './component/layout/Sidebar-layouts/report-sidebar/report-sidebar.component';
import { NewSidebarComponent } from './component/layout/Sidebar-layouts/new-sidebar/new-sidebar.component';
import { SidebardashComponent } from './component/layout/Sidebar-layouts/sidebardash/sidebardash.component';

//////Modal-popups//////
import { CreateTransactionComponent } from './component/layout/Modal-popups/create-transaction/create-transaction.component';
import { ServiceModalComponent } from './component/layout/Modal-popups/service-modal/service-modal.component';
import { ServicehomeModalComponent } from './component/layout/Modal-popups/servicehome-modal/servicehome-modal.component';
import { OpsPopupComponent } from './component/layout/Modal-popups/ops-popup/ops-popup.component';
///////Rails-stepsscreen///////
import { ReviewOrderComponent } from './component/layout/Rails-stepsscreen/review-order/review-order.component';
import { RailsSelectedComponent } from './component/layout/Rails-stepsscreen/rails-selected/rails-selected.component';
import { SelectServiceComponent } from './component/layout/Rails-stepsscreen/select-service/select-service.component';

import { TimelineComponent } from './component/layout/timeline/timeline.component';
import { FtuSidebarComponent } from './component/layout/Sidebar-layouts/ftu-sidebar/ftu-sidebar.component';
import { FtuTimelinebarComponent } from './component/baseComponent/Sidebarbase-comp/ftu-timelinebar/ftu-timelinebar.component';
import { NgxSlickJsModule } from 'ngx-slickjs';
import { ReportTableComponent } from './component/baseComponent/Table-comp/report-table/report-table.component';
import { ManualTableComponent } from './component/baseComponent/Table-comp/manual-table/manual-table.component';

////// Postlogin ftu messaging api ///////////////
/////message layout///////
import { PostLoginFTUAPIComponent } from './component/FTU-PLmessages/message-layoutcomp/post-login-ftu-api/post-login-ftu-api.component';
import { MessageFtudashboardComponent } from './component/FTU-PLmessages/message-layoutcomp/message-ftudashboard/message-ftudashboard.component';
import { FtuLayoutmessageComponent } from './component/FTU-PLmessages/message-layoutcomp/ftu-layoutmessage/ftu-layoutmessage.component';
import { TransformerAPIComponent } from './component/FTU-PLmessages/message-layoutcomp/transformer-api/transformer-api.component';
import { NodataMsgftudashboardComponent } from './component/FTU-PLmessages/message-layoutcomp/nodata-msgftudashboard/nodata-msgftudashboard.component';

/////message base/////
import { ModalMessagingapiComponent } from './component/FTU-PLmessages/message-basecomp/modal-messagingapi/modal-messagingapi.component';
import { ModalMessaginghomeComponent } from './component/FTU-PLmessages/message-basecomp/modal-messaginghome/modal-messaginghome.component';
import { MessageSidenavbarComponent } from './component/FTU-PLmessages/message-basecomp/message-sidenavbar/message-sidenavbar.component';
import { MessagingDropdownComponent } from './component/FTU-PLmessages/message-basecomp/messaging-creatorsform-dropdown/messaging-dropdown.component';
import { MessagingDropdownTComponent } from './component/FTU-PLmessages/message-basecomp/messaging-transformerform-dropdown/messaging-dropdown-t.component';
import { MessagingDropdownVComponent } from './component/FTU-PLmessages/message-basecomp/messaging-validatorform-dropdown/messaging-dropdown-v.component';

//sandbox admin user///
import { ActivityNotesandboxComponent } from './component/admin-PaaSsandbox/activity-notesandbox/activity-notesandbox.component';
import { AdminuserSandboxComponent } from './component/admin-PaaSsandbox/adminuser-sandbox/adminuser-sandbox.component';
import { PopupInviteusersandboxComponent } from './component/admin-PaaSsandbox/popup-inviteusersandbox/popup-inviteusersandbox.component';
import { UsercontentSandboxComponent } from './component/admin-PaaSsandbox/usercontent-sandbox/usercontent-sandbox.component';
import { UserdetailsSandboxComponent } from './component/admin-PaaSsandbox/userdetails-sandbox/userdetails-sandbox.component';
import { AdminsidebarSandboxComponent } from './component/admin-PaaSsandbox/adminsidebar-sandbox/adminsidebar-sandbox.component';
import { AdmintableSandboxComponent } from './component/admin-PaaSsandbox/admintable-sandbox/admintable-sandbox.component'

//messagin admin user///
import { MessageSidebaradminComponent } from './component/admin-messagingAPI/message-sidebaradmin/message-sidebaradmin.component';
import { AdminforUserComponent } from './component/admin-messagingAPI/adminfor-user/adminfor-user.component';
import { AdminuserContentComponent } from './component/admin-messagingAPI/adminuser-content/adminuser-content.component';
import { TableAdminuserComponent } from './component/admin-messagingAPI/table-adminuser/table-adminuser.component';
import { AdminpopupInviteuserComponent } from './component/admin-messagingAPI/adminpopup-inviteuser/adminpopup-inviteuser.component';
import { AdminUserDetailsComponent } from './component/admin-messagingAPI/admin-user-details/admin-user-details.component';
import { ActivityNotePopupComponent } from './component/admin-messagingAPI/activity-note-popup/activity-note-popup.component';


import { SelectSetuplayoutComponent } from './component/layout/select-setuplayout/select-setuplayout.component';

import { MessageRailaccordionComponent } from './component/baseComponent/Rails-comp/message-railaccordion/message-railaccordion.component';
import { StackBarchartComponent } from './component/baseComponent/Charts/stack-barchart/stack-barchart.component';
import { StepperWithnextComponent } from './component/baseComponent/Sidebarbase-comp/stepper-withnext/stepper-withnext.component';
import { NodataPaasFtudashboardComponent } from './component/compositeComponent/Sandbox-screens/nodata-paas-ftudashboard/nodata-paas-ftudashboard.component';
import {NotificationScreenComponent} from './component/compositeComponent/Sandbox-screens/notification-screen/notification-screen.component'
import {CreateNotificationPopupComponent} from './component/layout/Modal-popups/create-notification-popup/create-notification-popup.component';
import { ExecutiveDashboardStep2Component } from './component/compositeComponent/Dashboard-comp/executive-dashboard-step2/executive-dashboard-step2.component';
import { ActivateLoginComponent } from './component/layout/Loginsignup-screen/activate-userlogin/activate-login/activate-login.component';
import { ToastServiceService } from './utilities/toast-service/toast-service.service';
import { ActivateAccountScreenComponent } from './component/layout/Loginsignup-screen/activate-userlogin/activate-account-screen/activate-account-screen.component';

import { LoginComponent } from './component/sections/Loginsignup-screen/login/login.component';
import { LoginScreen1Component } from './component/sections/Loginsignup-screen/login-screen1/login-screen1.component';
import { SignupComponent } from './component/sections/Loginsignup-screen/signup/signup.component';
import { ControlPanelLoginComponent } from './component/controlpanel/control-panel-login/control-panel-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginScreen1Component,
    SignupComponent,
    ValidateUIComponent,
    TimelineComponent,
    TimelineTabComponent,
    InputWizardComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
    SideNavbarComponent,
    PaymentRailsComponent,
    NoDataoutputComponent,
    SwitchButtonComponent,
    PaymentRailComponent,
    LineChartComponent,
    SandboxScreen1Component,
    CreateTransactionComponent,
    TreeTableComponent,
    MessagingCarousalComponent,
    ReportComponent,
    BarChartComponent,
    DoughnutChartsComponent,
    SimGettingStartedComponent,
    ReportSidebarComponent,
    StepperComponent,
    SelectServiceComponent,
    SelectServiceComponentComponent,
    RailAccordionComponent,
    BarChart1Component,
    Setup2Component,
    VolanteMsgBoxComponent,
    VolanteSimEndComponent,
    ReviewOrderComponent,
    SearchFilterPipe,
    SmallCardComponent,
    EChartComponent,
    MessagesetupSidebarComponent,
    MessagesetupTableComponent,
    SidebarDropdownComponent,
    SidebarTableComponent,
    MessagingSimStartedComponent,
    ScheduledReportComponent,
    VolMainpageComponent,
    HeaderStartComponent,
    MainpageSelectserviceComponent,
    NewBarchartComponent,
    TimelineBarComponent,
    TimebarComponent,
    VolBannerpageComponent,
    NewSidebarComponent,
    RailsSelectedComponent,
    SidebardashComponent,
    SandboxNodatascreenComponent,
    PostLogin1Component,
    OpsDashboardComponent,
    OpsHeaderComponent,
    OpsLinechartComponent,
    CarouselSmallcard1Component,
    OpsBarchartComponent,
    InviteUserscreenComponent,
    CarouselSimstartedComponent,
    CarouselSmallcardComponent,
    ServiceModalComponent,
    ServicehomeModalComponent,
    PostLoginFtuComponent,
    FtuDashboardscreenComponent,
    FtuSidebarComponent,
    FtuTimelinebarComponent,
    PostLoginallComponent,
    ReportTableComponent,
    ManualTableComponent,
    ManualReportscreenComponent,
    PostLoginFTUAPIComponent,
    ModalMessagingapiComponent,
    ModalMessaginghomeComponent,
    MessageFtudashboardComponent,
    MessageSidenavbarComponent,
    FtuLayoutmessageComponent,
    SelectSetuplayoutComponent,
    TransformerAPIComponent,
    PartOneComponent,
    PartTwoComponent,
    PartThreeComponent,
    TreeviewPartsComponent,
    MessageSidebaradminComponent,
    AdminforUserComponent,
    AdminuserContentComponent,
    TableAdminuserComponent,
    MessagingDropdownComponent,
    AdminpopupInviteuserComponent,
    MessagingDropdownTComponent,
    MessagingDropdownVComponent,
    AdminUserDetailsComponent,
    ActivityNotePopupComponent,
    MessageRailaccordionComponent,
    NodataMsgftudashboardComponent,
    ExecutiveDashboardComponent,
    StackBarchartComponent,
    StepperWithnextComponent,
    NodataPaasFtudashboardComponent,
    NotificationScreenComponent,
    CreateNotificationPopupComponent,
    ExecutiveDashboardStep2Component,
    BoxPlotChartComponent,
    HorizontalBarchartComponent,
    ScatterChartComponent,
    HeatmapChartComponent,
    WorldMapchartComponent,
    OpsPopupComponent,
    ActivityNotesandboxComponent,
    AdminuserSandboxComponent,
    PopupInviteusersandboxComponent,
    UsercontentSandboxComponent,
    UserdetailsSandboxComponent,
    AdminsidebarSandboxComponent,
    AdmintableSandboxComponent,
    ActivateLoginComponent,
    ActivateAccountScreenComponent,
    ControlPanelLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    CdkStepperModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NguCarouselModule,
    HighchartsChartModule,
    TreeModule.forRoot(),
    NgxEchartsModule.forRoot({
      echarts
    }),
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
