import { Component, OnInit ,EventEmitter ,Input} from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  Loadedfiles:any=[{"fileName":"MerBan_monthly.csv","fileSize":"6 MB","status":"uploaded"},{"fileName":"MerBan_inst.csv","fileSize":"600 MB","status":"uploading"},{"fileName":"MerBan_email.pdf","fileSize":"2 GB","status":"uploading"}]

  public manualEntry:any=[{"name":"Select Template","id":"collapseOne","status":"initial"},{"name":"Transaction Details","id":"collapseTwo","status":"initial"},{"name":"Ordering Customer","id":"collapseThree","status":"initial"},{"name":"Beneficiary Details","id":"collapseFour","status":"initial"},{"name":"Beneficiary Bank Details","id":"collapseFive","status":"initial"},{"name":"Remittance Details","id":"collapseSix","status":"initial"},{"name":"Intermediatary Bank Details","id":"collapseSeven","status":"initial"},{"name":"Summary","id":"collapseEight","status":"initial"}]
  public hasBaseDropZoneOver:boolean;
  public active:String="Select Template";
  public activeType:String="fileUpload";
  public templ:any={};
  public templates:any=[{"title":"Aliquet nunc conubia","text":"Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede","createdBy":"John Smith","credatedOn":"12-10-2020","type":"Shared","pinned":true},{"title":"Tempor pretium","text":"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.","createdBy":"John Smith","credatedOn":"18-10-2020","type":"Shared","pinned":false},{"title":"Adipiscing vehicula tempor  ","text":"Sed non quam. In vel mi sit amet augue congue elementum. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.","createdBy":"John Smith","credatedOn":"18-10-2020","type":"Shared","pinned":false},{"title":"Lacinia cum magnis","text":"Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus ","createdBy":"John Smith","credatedOn":"18-10-2020","type":"Shared","pinned":false},{"title":"Aliquet nunc conubia","text":"Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede","createdBy":"John Smith","credatedOn":"12-10-2020","type":"Shared","pinned":true}]
  public paymentDetails={
    "parentKey": "Payment Transaction",
    "expand":true,
    "childKey": [{
      "parentKey": "Payment Detalis",
      "expand":true,
      "parentObj": "pymtDtls",
      "childKey": [{
        "key": "Party",
        "value": "partyName"
      }, {
        "key": "Service",
        "value": "paymentService"
      }, {
        "key": "Message Type",
        "value": "custransfer"
      }, {
        "key": "Party Service Association Code",
        "value": "psacd"
      },{
          "key":"Branch",
          "value":"branch"
      },{
          "key":"Products Supported",
          "value":"productSupport"
      },{
          "key":"Value Date",
          "value":"date"
      },{
          "key":"Payment Currency",
          "value":"pytCurrency"
      },{
          "key":"Amount",
          "value":"amount"
      }]
    }, {
      "parentKey": "Ordering Customer",
      "parentObj": "custDtls",
      "expand":false,
      "childKey": [{
        "key": "ClientID",
        "value": "clientId"
      }, {
        "key": "Name",
        "value": "name"
      }, {
        "key": "Address Line 1",
        "value": "add1"
      }, {
        "key": "Address Line 2",
        "value": "add2"
      },{
          "key":"City",
          "value":"city"
      },{
          "key":"State",
          "value":"state"
      },{
          "key":"Country",
          "value":"country"
      },{
          "key":"Account Number",
          "value":"accNum"
      },{
        "key":"Account Currency",
        "value":"accCurrency"
    },{
      "key":"Account Name",
      "value":"accName"
  },{
    "key":"Account Domiciled Country",
    "value":"accCountry"
  }]
    }, {
      "parentKey": "Beneficiary Bank Details",
      "expand":false
    }, {
      "parentKey": "Beneficiary Details",
      "expand":false
    }, {
      "parentKey": "Remittance Information",
      "expand":false
    }, {
      "parentKey": "Intermediary Bank Details",
      "expand":false
    }]
  }

  public pymtDtls:any =  { "partyName": "Vodafone", "paymentService": "Payment Service - Payment", "custransfer": "Customer Credit Transfer", "psacd": "Vodafone Payment MT103RTP (Vodafone)", "branch": "United Kingdom Branch", "productSupport": "Swift", "date": "Jun 06 2021", "debtorCode": "Option 1", "country": "Option 1", "pytCurrency": "Option 1", "amount": "Option 1", "eToEId": "Option 1" } ;
  public custDtls:any = { "clientId": "123456", "add1": "test", "name": "John" };


  public selectedTemplate = false;

  ngOnInit() {
  }
  method(type){
    this.activeType=type;
    this.active="Select Template";
  }
  selectActive(active){
    
    this.active=active;
    if(active !== 'Select Template'){
      if(this.selectedTemplate){
        this.manualEntry[0]['status'] = "completed";
      }else{
        this.manualEntry[0]['status'] = "pending";
      }
    }else{
      this.manualEntry[1]['status'] = "initial";
    }
      
      if(active !== 'Transaction Details'){
        if(this.pymtDtls['partyName'] && this.pymtDtls['paymentService'] && this.pymtDtls['custransfer'] && this.pymtDtls['psacd'] && this.pymtDtls['branch'] && this.pymtDtls['productSupport'] && this.pymtDtls['date'] && this.pymtDtls['pytCurrency'] && this.pymtDtls['amount']){
          this.manualEntry[1]['status'] = "completed";
        }else{
          this.manualEntry[1]['status'] = "pending";
        }
      }else{
        this.manualEntry[1]['status'] = "initial";
      }
      if(active !== 'Ordering Customer' && active !== 'Transaction Details' && active !== 'Select Template'){
        if(this.custDtls['accNum'] ){
          this.manualEntry[2]['status'] = "completed";
        }else{
          this.manualEntry[2]['status'] = "pending";
        }
      }else{
        this.manualEntry[2]['status'] = "initial";
      }

      if(active=='Summary'){
        this.manualEntry[3]['status'] = "completed";
        this.manualEntry[4]['status'] = "completed";
        this.manualEntry[5]['status'] = "completed";
        this.manualEntry[6]['status'] = "completed";
      }
      
  
  }
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/fileupload/',
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['xls','pdf','csv']


    });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
  }

  selectTemplate(){
    this.selectedTemplate = true;  
  }

  select(i){
    this.paymentDetails.childKey[i].expand=!this.paymentDetails.childKey[i].expand;
  }
  selectParent(){
    this.paymentDetails.expand=!this.paymentDetails.expand;
  }
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  saveTemplate(templ){
      this.templates.push({"title":templ.Name,"text":templ.description,"createdBy":"John Smith","credatedOn":"05-06-2021","type":"Shared","pinned":true})
  }
}
