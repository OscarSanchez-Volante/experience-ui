export interface Select{
  image: string;
  title: string;
  subtitle : string;
  description1:string;
  description2:string;
  checkbuttonname:string;
}
export interface msgrailsStep2Interface{
title:string;
}
export interface selectedtitleInterface{
  title:string;
  description?:string;
  }

export interface setup2accordiondata{
  length:number;
  id:number;
  header:string;
  display:boolean;
  content:string;
  head:string;
  points:string;
  color?:string|number;
}