import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class GlobalConstants{
  public static ApiUrl: string = "http://localhost:8080/";
  public static numberFormat = Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' });
}

export const httpOptionsJson = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

export const httpOptionsText = {
  headers: new HttpHeaders({
    'Content-type': 'application/text',
    Authorization: 'my-auth-token',
  })
};

export const 
httpOptionsMultipart = {
  headers: new HttpHeaders({
    Authorization: 'my-auth-token',
  })
};


