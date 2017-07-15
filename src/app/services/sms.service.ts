import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../app.config';
import { SmsData } from '../models/index';
 
@Injectable()
export class SmsService {
    constructor(private http: Http, private config: AppConfig) { }
 
    sendSms(smsdata: SmsData) {
        return this.http.post(this.config.apiUrl + '/sms/sendsms', smsdata);
    }

    // getAll() {
    //     return this.http.get(this.config.apiUrl + '/menus/getAllitems').map((response: Response) => response.json());
    // }
 
    // getById(_id: string) {
    //     return this.http.get(this.config.apiUrl + '/menus/' + _id).map((response: Response) => response.json());
    // }
 
    // add(menu: Menu) {
    //     return this.http.post(this.config.apiUrl + '/menus/addItem', menu);
    // }

    // update(menu: Menu) {
    //     return this.http.put(this.config.apiUrl + '/menus/updateItem' + menu._id, menu);
    // }
 
    // delete(_id: string) {
    //     return this.http.delete(this.config.apiUrl + '/menus/deleteItem' + _id);
    // }
}