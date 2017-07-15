export interface SmsData {
    _id: string;        
    auth_email: string;
    auth_accountid :string;
    auth_secret:string;    
    tophone: number;
    body: string;
    created: Date;
    updated: Date;
}