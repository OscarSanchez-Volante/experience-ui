export interface userdetailInterface{
    label: string;
    fieldName: string;

  }
  export interface userContentInterface{
    ActivityLog: string|number;
    Summary: string|number;

  }
  export interface controlUserTableHead{
    label: string;
    fieldName: string;
  }
  export interface controlUserTableContent{
    user:string;
    email: string|number;
    company: string;
    LastLogin:string|number;
    RequestDate:string|number;
    Accept:String;
  }
  export interface tableadminInterface{
    fieldName:string;
    label:string|number;
    condition:string;
  
  }
  export interface tabledataInterface{
    ind:string|any;
    module:string|any;
  }