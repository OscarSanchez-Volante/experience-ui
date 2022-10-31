export interface revieworderinputInterface{
    id:number;
    header:string;
    color?:string|number;
    transaction?:string;
    content:string;
    head?:string;
    // notes?:string;
    // points?:string;
}
export interface msgrevieworderinputInterface{
    id:number;
    header: string|number;
    headerId:string;
}