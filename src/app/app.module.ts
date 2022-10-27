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
import * as echarts from 'echarts';
/*Base component*/
/////////Sidebarbase-comp///////
import { TimelineTabComponent } from '@partialComponents/Sidebarbase-comp/timeline-tab/timeline-tab.component';
import { SidebarDropdownComponent } from '@partialComponents/Sidebarbase-comp/sidebar-dropdown/sidebar-dropdown.component';
import { SidebarTableComponent } from '@partialComponents/Sidebarbase-comp/sidebar-table/sidebar-table.component';
import { TimebarComponent } from '@partialComponents/Sidebarbase-comp/timebar/timebar.component';
import { TimelineBarComponent } from '@partialComponents/Sidebarbase-comp/timeline-bar/timeline-bar.component';

///////Reuse-components///////
import { BadgeComponent } from '@partialComponents/Reuse-components/badge/badge.component';
import { AccordionComponent } from '@partialComponents/Reuse-components/accordion/accordion.component';
import { SwitchButtonComponent } from '@partialComponents/Reuse-components/switch-button/switch-button.component';
import { DropdownComponent } from '@partialComponents/Reuse-components/dropdown/dropdown.component';
import { DatePickerComponent } from '@partialComponents/Reuse-components/date-picker/date-picker.component';
import { SpinnerComponent } from '@partialComponents/Reuse-components/spinner/spinner.component';
import { RangeComponent } from '@partialComponents/Reuse-components/range/range.component';
import { StackComponent } from '@partialComponents/Reuse-components/stack/stack.component';
import { StepperComponent } from '@partialComponents/Reuse-components/stepper/stepper.component';
import { ProgressBarComponent } from '@partialComponents/Reuse-components/progress-bar/progress-bar.component';

import { PartOneComponent } from '@partialComponents/partOne/partOne.component';
import { PartTwoComponent } from '@partialComponents/partTwo/partTwo.component';
import { PartThreeComponent } from '@partialComponents/partThree/partThree.component';
import { TreeviewPartsComponent } from '@partialComponents/treeview-parts/treeview-parts.component';
////////Table-comp///////
import { TableComponent } from '@partialComponents/Table-comp/table/table.component';
import { TreeViewComponent } from '@partialComponents/Table-comp/tree-view/tree-view.component';
import { TreeTableComponent } from '@partialComponents/Table-comp/tree-table/tree-table.component';

/////////Header-comp//////
import { HeaderComponent } from '@partialComponents/Header-comp/header/header.component';
import { HeaderStartComponent } from '@partialComponents/Header-comp/header-start/header-start.component';
import { OpsHeaderComponent } from '@partialComponents/Header-comp/ops-header/ops-header.component';

///////Rails-comp///////
import { PaymentRailsComponent } from '@partialComponents/Rails-comp/payment-rails/payment-rails.component';
import { RailAccordionComponent } from '@partialComponents/Rails-comp/rail-accordion/rail-accordion.component';

///////charts//////////
import { LineChartComponent } from '@partialComponents/Charts/line-chart/line-chart.component';
import { BarChartComponent } from '@partialComponents/Charts/bar-chart/bar-chart.component';
import { AmbarChartComponent } from '@partialComponents/Charts/ambar-chart/ambar-chart.component';
import { ChartComponent } from '@partialComponents/Charts/chart/chart.component';
import { NewBarchartComponent } from '@partialComponents/Charts/new-barchart/new-barchart.component';
import { DoughnutChartsComponent } from '@partialComponents/Charts/doughnut-charts/doughnut-charts.component';
import { EChartComponent } from '@partialComponents/Charts/e-chart/e-chart.component';
import { BarChart1Component } from '@partialComponents/Charts/bar-chart1/bar-chart1.component';
import { OpsLinechartComponent } from '@partialComponents/Charts/ops-linechart/ops-linechart.component';
import { OpsBarchartComponent } from '@partialComponents/Charts/ops-barchart/ops-barchart.component';
import { BoxPlotChartComponent } from '@partialComponents/Charts/box-plot-chart/box-plot-chart.component';
import { HorizontalBarchartComponent } from '@partialComponents/Charts/horizontal-barchart/horizontal-barchart.component';
import { ScatterChartComponent } from '@partialComponents/Charts/scatter-chart/scatter-chart.component';
import { HeatmapChartComponent } from '@partialComponents/Charts/heatmap-chart/heatmap-chart.component';
import { WorldMapchartComponent } from '@partialComponents/Charts/world-mapchart/world-mapchart.component';

////////Box-comp////////
import { VolanteMsgBoxComponent } from '@partialComponents/volante-msg-box/volante-msg-box.component';

///////Smallcard-comp///////
import { SmallCardComponent } from '@partialComponents/Smallcard-comp/small-card/small-card.component';
import { CarouselSmallcardComponent } from '@partialComponents/Smallcard-comp/carousel-smallcard/carousel-smallcard.component';
import { CarouselSmallcard1Component } from '@partialComponents/Smallcard-comp/carousel-smallcard1/carousel-smallcard1.component';
/////////Messagebasecomp///////
import { MessagesetupSidebarComponent } from '@partialComponents/Messagebasecomp/messagesetup-sidebar/messagesetup-sidebar.component';
import { MessagesetupTableComponent } from '@partialComponents/Messagebasecomp/messagesetup-table/messagesetup-table.component';

import { NoDataoutputComponent } from '@partialComponents/no-dataoutput/no-dataoutput.component';
import { CarouselSimstartedComponent } from '@partialComponents/carousel-simstarted/carousel-simstarted.component';
import { MessagingCarousalComponent } from '@partialComponents/messaging-carousal/messaging-carousal.component';
/*Composite component*/
//////// Dashboard-comp////////
import { OpsDashboardComponent } from '@sections/compositeComponent/Dashboard-comp/ops-dashboard/ops-dashboard.component';
import { FtuDashboardscreenComponent } from '@sections/compositeComponent/Dashboard-comp/ftu-dashboardscreen/ftu-dashboardscreen.component';
import { ExecutiveDashboardComponent } from '@sections/compositeComponent/Dashboard-comp/executive-dashboard/executive-dashboard.component';

//////////Paymentrail-mainscreens////////
import { PaymentRailComponent } from '@sections/compositeComponent/Paymentrail-mainscreens/payment-rail/payment-rail.component';
import { PaymentRail1Component } from '@sections/compositeComponent/Paymentrail-mainscreens/payment-rail1/payment-rail1.component';
import { PaymentRail2Component } from '@sections/compositeComponent/Paymentrail-mainscreens/payment-rail2/payment-rail2.component';
/////////Setup-screens/////////
import { SimGettingStartedComponent } from '@sections/compositeComponent/Setup-screens/sim-getting-started/sim-getting-started.component';
import { MessagingSimStartedComponent } from '@sections/compositeComponent/Setup-screens/messaging-sim-started/messaging-sim-started.component';
import { Setup2Component } from '@sections/compositeComponent/Setup-screens/setup2/setup2.component';
////////Sandbox-screens///////
import { SandboxScreen1Component } from '@sections/compositeComponent/Sandbox-screens/sandbox-screen1/sandbox-screen1.component';
import { SandboxNodatascreenComponent } from '@sections/compositeComponent/Sandbox-screens/sandbox-nodatascreen/sandbox-nodatascreen.component';
///////Report-screen///////
import { ReportComponent } from '@sections/compositeComponent/Report-screen/report/report.component';
import { ScheduledReportComponent } from '@sections/compositeComponent/Report-screen/scheduled-report/scheduled-report.component';
import { ManualReportscreenComponent } from '@sections/compositeComponent/Report-screen/manual-reportscreen/manual-reportscreen.component';

/////Vol-pages///////
import { VolMainpageComponent } from '@sections/compositeComponent/Vol-pages/vol-mainpage/vol-mainpage.component';
import { VolBannerpageComponent } from '@sections/compositeComponent/Vol-pages/vol-bannerpage/vol-bannerpage.component';
///////Selectservice-comp//////
import { SelectServiceComponentComponent } from '@sections/compositeComponent/Selectservice-comp/select-service-component/select-service-component.component';
import { MainpageSelectserviceComponent } from '@sections/compositeComponent/Selectservice-comp/mainpage-selectservice/mainpage-selectservice.component';
///////Post-loginscreen//////
import { PostLogin1Component } from '@sections/compositeComponent/Post-loginscreen/post-login1/post-login1.component';
import { PostLoginFtuComponent } from '@sections/compositeComponent/Post-loginscreen/post-login-ftu/post-login-ftu.component';
import { PostLoginallComponent } from '@sections/compositeComponent/Post-loginscreen/post-loginall/post-loginall.component';

//////Wizard-screen////////
import { InputWizardComponent } from '@sections/compositeComponent/Wizard-screen/input-wizard/input-wizard.component';

/* Layout component*/
//////Loginsignup-screen///////
import { LoginComponent } from '@sections/Loginsignup-screen/login/login.component';
import { SignupComponent } from '@sections/Loginsignup-screen/signup/signup.component';
import { LoginScreen1Component } from '@sections/Loginsignup-screen/login-screen1/login-screen1.component';
import { InviteUserscreenComponent } from '@sections/Loginsignup-screen/invite-userscreen/invite-userscreen.component';
import { ValidateUIComponent } from '@sections/Loginsignup-screen/validate-ui/validate-ui.component';
import { VolanteSimEndComponent } from '@sections/Loginsignup-screen/volante-sim-end/volante-sim-end.component';

//////Sidebar-layouts//////
import { SidebarComponent } from '@partialComponents/Sidebar-layouts/sidebar/sidebar.component';
import { SideNavbarComponent } from '@partialComponents/Sidebar-layouts/side-navbar/side-navbar.component';
import { ReportSidebarComponent } from '@partialComponents/Sidebar-layouts/report-sidebar/report-sidebar.component';
import { MessagereportSidebarComponent } from '@partialComponents/Sidebar-layouts/messagereport-sidebar/messagereport-sidebar.component';
import { NewSidebarComponent } from '@partialComponents/Sidebar-layouts/new-sidebar/new-sidebar.component';
import { SidebardashComponent } from '@partialComponents/Sidebar-layouts/sidebardash/sidebardash.component';

//////Modal-popups//////
import { CreateTransactionComponent } from '@partialComponents/Modal-popups/create-transaction/create-transaction.component';
import { ServiceModalComponent } from '@partialComponents/Modal-popups/service-modal/service-modal.component';
import { ServicehomeModalComponent } from '@partialComponents/Modal-popups/servicehome-modal/servicehome-modal.component';
import { OpsPopupComponent } from '@partialComponents/Modal-popups/ops-popup/ops-popup.component';
///////Rails-stepsscreen///////
import { ReviewOrderComponent } from '@partialComponents/Rails-stepsscreen/review-order/review-order.component';
import { RailsSelectedComponent } from '@partialComponents/Rails-stepsscreen/rails-selected/rails-selected.component';
import { SelectServiceComponent } from '@partialComponents/Rails-stepsscreen/select-service/select-service.component';

import { TimelineComponent } from '@partialComponents/timeline/timeline.component';
import { FtuSidebarComponent } from '@partialComponents/Sidebar-layouts/ftu-sidebar/ftu-sidebar.component';
import { FtuTimelinebarComponent } from '@partialComponents/Sidebarbase-comp/ftu-timelinebar/ftu-timelinebar.component';
import { NgxSlickJsModule } from 'ngx-slickjs';
import { ReportTableComponent } from '@partialComponents/Table-comp/report-table/report-table.component';
import { ManualTableComponent } from '@partialComponents/Table-comp/manual-table/manual-table.component';

////// Postlogin ftu messaging api ///////////////
/////message layout///////
import { PostLoginFTUAPIComponent } from '@sections/FTU-PLmessages/message-layoutcomp/post-login-ftu-api/post-login-ftu-api.component';
import { MessageFtudashboardComponent } from '@sections/FTU-PLmessages/message-layoutcomp/message-ftudashboard/message-ftudashboard.component';
import { FtuLayoutmessageComponent } from '@sections/FTU-PLmessages/message-layoutcomp/ftu-layoutmessage/ftu-layoutmessage.component';
import { TransformerAPIComponent } from '@sections/FTU-PLmessages/message-layoutcomp/transformer-api/transformer-api.component';
import { NodataMsgftudashboardComponent } from '@sections/FTU-PLmessages/message-layoutcomp/nodata-msgftudashboard/nodata-msgftudashboard.component';

/////message base/////
import { ModalMessagingapiComponent } from '@sections/FTU-PLmessages/message-basecomp/modal-messagingapi/modal-messagingapi.component';
import { ModalMessaginghomeComponent } from '@sections/FTU-PLmessages/message-basecomp/modal-messaginghome/modal-messaginghome.component';
import { MessageSidenavbarComponent } from '@sections/FTU-PLmessages/message-basecomp/message-sidenavbar/message-sidenavbar.component';
import { MsgrailsStep2Component } from '@sections/FTU-PLmessages/message-basecomp/msgrails-step2/msgrails-step2.component';
import { TransformerCollapseComponent } from '@sections/FTU-PLmessages/message-basecomp/transformer-collapse/transformer-collapse.component';
import { MessagingDropdownComponent } from '@sections/FTU-PLmessages/message-basecomp/messaging-creatorsform-dropdown/messaging-dropdown.component';
import { MessagingDropdownTComponent } from '@sections/FTU-PLmessages/message-basecomp/messaging-transformerform-dropdown/messaging-dropdown-t.component';
import { MessagingDropdownVComponent } from '@sections/FTU-PLmessages/message-basecomp/messaging-validatorform-dropdown/messaging-dropdown-v.component';

//sandbox admin user///
import { ActivityNotesandboxComponent } from '@sections/admin-PaaSsandbox/activity-notesandbox/activity-notesandbox.component';
import { AdminuserSandboxComponent } from '@sections/admin-PaaSsandbox/adminuser-sandbox/adminuser-sandbox.component';
import { PopupInviteusersandboxComponent } from '@sections/admin-PaaSsandbox/popup-inviteusersandbox/popup-inviteusersandbox.component';
import { UsercontentSandboxComponent } from '@sections/admin-PaaSsandbox/usercontent-sandbox/usercontent-sandbox.component';
import { UserdetailsSandboxComponent } from '@sections/admin-PaaSsandbox/userdetails-sandbox/userdetails-sandbox.component';
import { AdminsidebarSandboxComponent } from '@sections/admin-PaaSsandbox/adminsidebar-sandbox/adminsidebar-sandbox.component';
import { AdmintableSandboxComponent } from '@sections/admin-PaaSsandbox/admintable-sandbox/admintable-sandbox.component'

//messagin admin user///
import { MessageSidebaradminComponent } from '@sections/admin-messagingAPI/message-sidebaradmin/message-sidebaradmin.component';
import { AdminforUserComponent } from '@sections/admin-messagingAPI/adminfor-user/adminfor-user.component';
import { AdminuserContentComponent } from '@sections/admin-messagingAPI/adminuser-content/adminuser-content.component';
import { TableAdminuserComponent } from '@sections/admin-messagingAPI/table-adminuser/table-adminuser.component';
import { AdminpopupInviteuserComponent } from '@sections/admin-messagingAPI/adminpopup-inviteuser/adminpopup-inviteuser.component';
import { AdminUserDetailsComponent } from '@sections/admin-messagingAPI/admin-user-details/admin-user-details.component';
import { ActivityNotePopupComponent } from '@sections/admin-messagingAPI/activity-note-popup/activity-note-popup.component';


import { SelectSetuplayoutComponent } from '@partialComponents/select-setuplayout/select-setuplayout.component';

import { MessageRailaccordionComponent } from '@partialComponents/Rails-comp/message-railaccordion/message-railaccordion.component';
import { StackBarchartComponent } from '@partialComponents/Charts/stack-barchart/stack-barchart.component';
import { StepperWithnextComponent } from '@partialComponents/Sidebarbase-comp/stepper-withnext/stepper-withnext.component';
import { NodataPaasFtudashboardComponent } from '@sections/compositeComponent/Sandbox-screens/nodata-paas-ftudashboard/nodata-paas-ftudashboard.component';
import {NotificationScreenComponent} from '@sections/compositeComponent/Sandbox-screens/notification-screen/notification-screen.component'
import {CreateNotificationPopupComponent} from '@partialComponents/Modal-popups/create-notification-popup/create-notification-popup.component';
import { ExecutiveDashboardStep2Component } from '@sections/compositeComponent/Dashboard-comp/executive-dashboard-step2/executive-dashboard-step2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ValidateUIComponent,
    TimelineComponent,
    TimelineTabComponent,
    InputWizardComponent,
    HeaderComponent,
    SidebarComponent,
    DatePickerComponent,
    TreeViewComponent,
    TableComponent,
    SideNavbarComponent,
    PaymentRailsComponent,
    BadgeComponent,
    AccordionComponent,
    NoDataoutputComponent,
    SwitchButtonComponent,
    PaymentRailComponent,
    PaymentRail1Component,
    PaymentRail2Component,
    LineChartComponent,
    SandboxScreen1Component,
    DropdownComponent,
    CreateTransactionComponent,
    TreeTableComponent,
    MessagingCarousalComponent,
    ReportComponent,
    BarChartComponent,
    DoughnutChartsComponent,
    SimGettingStartedComponent,
    ReportSidebarComponent,
    SpinnerComponent,
    RangeComponent,
    StepperComponent,
    StackComponent,
    ProgressBarComponent,
    SelectServiceComponent,
    SelectServiceComponentComponent,
    RailAccordionComponent,
    BarChart1Component,
    Setup2Component,
    VolanteMsgBoxComponent,
    VolanteSimEndComponent,
    ReviewOrderComponent,
    AmbarChartComponent,
    ChartComponent,
    SearchFilterPipe,
    SmallCardComponent,
    EChartComponent,
    MessagesetupSidebarComponent,
    MessagesetupTableComponent,
    SidebarDropdownComponent,
    SidebarTableComponent,
    MessagingSimStartedComponent,
    MessagereportSidebarComponent,
    ScheduledReportComponent,
    LoginScreen1Component,
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
    MsgrailsStep2Component,
    FtuLayoutmessageComponent,
    SelectSetuplayoutComponent,
    TransformerCollapseComponent,
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
    AdmintableSandboxComponent
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
