import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({ 
  providedIn: 'root'
})
export class JsonHttpService {
host:string="http://localhost:3000";
  constructor(private http:HttpClient) {

   }
    getjsonreviewOrder(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getreportSidbar(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getmessageReportSidbar(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getjsonrailsSelected(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getopsPopup(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getsignup(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getmessagingApis(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getmessageFtu(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getModalMessagingpopup(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getsetup2(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getsandbox(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getsandboxNodata(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getnotification(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getnodataPaas(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getreport(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getscheduledReport(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getvolanteSim(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getpaymentRail2(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getpaymentRail1(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getpaymentRail(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getinviteUser(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getvalidateUi(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getjsonlinechart(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getftuDashboard(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getexecutiveDashboard(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getexecutiveSmidBar(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getsidebarReport(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getMessageSetup(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getselectedAddOn1(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getselectedAddOn2(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getselectValue(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getadminUser(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getadminUserContent(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getcarouselcardData(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getMessagingcardData(url){
      return this.http.get(url).pipe(map(res => res))
    }
    gettreeinputvalidators(url){
      return this.http.get(url).pipe(map(res => res))
    }
    gettreeinputtransformer(url){
      return this.http.get(url).pipe(map(res => res))
    }
    gettreeinputcreator(url){
      return this.http.get(url).pipe(map(res => res))
    }
    getallreportsdata(url){
      return this.http.get(url).pipe(map(res => res))
    }
}
