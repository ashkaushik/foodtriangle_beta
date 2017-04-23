export interface User {
    _id: string;        
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    userName: String;
    emailVerified:boolean;
    phoneVerified:boolean;
    role?: { 
            name?:String;
            invitedBy?:string;
            email?:String;
          }
    address?:{
            address1?:string;
            address2?:string;
            address3?:string;
            city?:string;
            state?:string;
            country?:string;
            postCode?:string;
            category?:string;    
          }
    defaultaddress:boolean;
    active:boolean;
    phone: number;
    created: Date;
    updated: Date;
}