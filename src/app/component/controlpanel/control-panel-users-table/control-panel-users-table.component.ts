import { string } from '@amcharts/amcharts4/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccountLoginDTO } from 'src/app/interface/account-login-dto';
import { AccountResponse } from 'src/app/interface/account-response';
import { tabledataInterface, tableadminInterface } from 'src/app/interface/control-panel-users-table';
import { ColumnControl } from 'src/app/internalInterface/column-control';
import { AccountService } from 'src/app/services/account/account.service';
import { JsonHttpService } from 'src/app/services/json-http/json-http.service';
import { GlobalVariables } from 'src/app/utilities/globals-variables';
import { ToastServiceService } from 'src/app/utilities/toast-service/toast-service.service';

@Component({
  selector: 'app-control-panel-users-table',
  templateUrl: './control-panel-users-table.component.html',
  styleUrls: ['./control-panel-users-table.component.scss']
})
export class ControlPanelUsersTableComponent implements OnInit {

  isfrmChecked: boolean;
  Array: string[] = [];
  
  collection = [];
  p = 1;
  tableHead: string="Users";
  @Input() tableValues: tableadminInterface[];
  @Input() moduleName: string;
  @Output() valueEvent = new EventEmitter<tabledataInterface>();
  public data: tabledataInterface = { ind: '', module: '' };
  @Input() contain: string | number;
  public currentUrl;
  ShowData: string | number;
  selectedColumn: string | number;
  searchText;
  
  page: number=0;
  orderBy="";
  sortDir: string="";
  sortDirection:string="";

  accountTable:AccountResponse;
  tableControls:ColumnControl[]=[];

  ngOnInit() {
    this.currentUrl = this.router.url;
  }
  
  deleteAccount(id){
    this.accountService.deleteAccount(id).subscribe(result=> {
      this.toastService.OpenToast(result.success, result.message);
      this.loadTable();
    });
  }

  updateStatus(id,status){
    this.accountService.updateAccountStatus(id,status).subscribe(result=> {
      this.toastService.OpenToast(result.success, result.message);
      this.loadTable();
    });
  }

  selected(i) {
    this.data.ind = i;
    this.data.module = this.moduleName;
    this.valueEvent.emit(this.data)
  }


  movePage(number){
    this.page+=number;
    this.loadTable();
  }

  constructor(
    private router: Router,
    private jsonhttp:JsonHttpService,
    private accountService:AccountService,
    private globalvariables:GlobalVariables,
    private toastService:ToastServiceService) {
    this.jsonhttp.getadminUserContent("assets/data/admin.json").subscribe(data => {
      this.tableHead = data['adminuserTablehead'];
      this.tableValues = data['adminuserTablecont'];
    })

    this.tableControls.push({ columnName: 'User', order: '', filter: '',columnFieldId:'firstName' })
    this.tableControls.push({ columnName: 'Email', order: '', filter: '',columnFieldId:'email' })
    this.tableControls.push({ columnName: 'Company', order: '', filter: '',columnFieldId:'institution' })
    this.tableControls.push({ columnName: 'Last login', order: '', filter: '' ,columnFieldId:''})
    this.tableControls.push({ columnName: 'RequestDate', order: '', filter: '' ,columnFieldId:''})
    this.tableControls.push({ columnName: 'Status', order: '', filter: '',columnFieldId:'status' })

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }

    this.loadTable();
  }
//page: number, orderBy: string, sortDir: string
  private loadTable() {
    this.accountService.getAllAccounts(this.page,this.orderBy,this.sortDirection).subscribe(a => {
      this.accountTable = a;
      console.log(a);
    });
  }

  OrderTableBy(column){

    var oldOrder=this.tableControls.find(element=> element.columnName==column).order;
    this.tableControls.forEach(element => {element.order='';});
    
    this.tableControls.find(element=> element.columnName==column).order=oldOrder===''?'asc':oldOrder==='desc'?'':'desc';
    this.sortDirection= this.tableControls.find(element=> element.columnName==column).order;
    this.orderBy =this.sortDirection!=''?this.tableControls.find(element=> element.columnName==column).columnFieldId:'';
    this.loadTable();
  }
  componentMethodName(event: Event, isChecked: boolean) {
    if (isChecked) {
      this.Array.push((event.target as HTMLInputElement).value)
    }
    else {
      let index = this.Array.indexOf((event.target as HTMLInputElement).value);
      this.Array.splice(index, 1);
    }
  }
  sortData(fieldName) {

    // if (this.selectedColumn != fieldName) {
    //   this.sortDir = -1;
    // }

    // this.selectedColumn = fieldName;
    // if (this.sortDir == 1) {
    //   this.sortDir = -1;
    // } else {
    //   this.sortDir = 1;
    // }

  }


}