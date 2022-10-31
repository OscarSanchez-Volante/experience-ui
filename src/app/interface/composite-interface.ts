export interface containinputInterface{
    image:string|number;
    title:string;
    description:string;
    buttonName:string;
    route?:string|number
}
export interface selectvalueInterface{
    image:string|number;
    head:string;
    subtitle:string;
    description1:string;
    description2:string;
    checkbuttonname :string;
}
export interface selectedaddon1Interface{
    title:string;
    image:string|number;
    selected:boolean;
    isDisabled?:boolean
    desc:string;
    content?:string;
}
export interface selectedaddon2Interface{
    title:string;
    selected:boolean;
    isDisabled?:boolean
    desc:string;
   
}
export interface ftutableheadInterface{
    label:string;
    fieldName:string;
}

export interface ftutablecontentInterface{
    Name:string;
    Frequency:string;
    Date:string|number;
    CreatedBy:string;
    Expires:string|number;
}