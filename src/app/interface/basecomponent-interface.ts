export interface msgboxInterface{
    title:string;
    type:string;
    image:string|number;
    text:string;
    buttonName:string;
    link:string|number;
}
export interface msgsetupInterface{
    header:string;
    count:number;
    transaction:string|number;
    id:number;
    color:number|string;
}
export interface partoneInterface{
    id:number|string;
    name:string;
    expand?:boolean;
    checked?:boolean;
}
export interface messagerailaccordianInterface{ 
    id:number;
    header:string|number;
    headerId:string;
}
export interface paymentrailsInterface{
    gridId:string|number;
    header:string;
    content:string;
    id:number;
    amount:string|number;
    amountIn:string|number;
    name:string;
    state:string;
    name1:string;
    pty:string|number;
    ptyval:string|number;
    acctp:string|number;
    acctpval:string|number;
    prefacc:string|number;
    prefaccval:string|number;
    Dflt:string|number;
    amtin:string|number;
    own:string|number;
    ownval:string|number;
    date:string|number;
}
export interface railaccordionInterface{
    id:number;
    header:string;
    content:string|number;
    head:string;
    points:string;
    selected:string|number|boolean;
    display:string|number|boolean;
    notes:string|number;
}
export interface sidebardropdownInterface{
    id:number;
    header:string;
    selected:string|number|boolean;

}
