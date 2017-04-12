export class User {
    _id: string;        
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    username: String;
    emailVerified:boolean;
    phoneVerified:boolean;
    Role: { 
            Name:String;
            InvitedBy:string;
            Email:String;
          }
    active:boolean;
    phone: number;
    created: Date;
    updated: Date;
}