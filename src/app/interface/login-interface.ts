export interface loginInterface{
   email:string|number;
   password:string|number;
   conformpassword?:string|number;
  }
export interface inviteuserInterface{
   title1:string;
   role:string;
   firstName:string;
   lastName:string;
   email:string;
} 
export interface signupInterface{
   institutionName:string;
   firstName:string;
   lastName:string;
   email:string;
   password:string | number;
   contactNumber: number | string;
   country:string|number|undefined;
   title:string|number|undefined;
   title1?:string;
} 