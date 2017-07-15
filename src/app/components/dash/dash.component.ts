import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { AlertService, SmsService } from '../../services/index';
import { SmsData } from '../../models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'dash.component.html',
})

export class DashComponent implements OnInit{
    public otpForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    loading = false;
    model: any = {};
    constructor(
        private _fb: FormBuilder,
        private router: Router,        
        private smsService: SmsService,
        private alertService: AlertService,
    ) { }

  ngOnInit() {
        this.otpForm = this._fb.group({
            phone: ['9910454530', [<any>Validators.required, <any>Validators.minLength(10),<any>Validators.maxLength(10)]],
        });
    }

  sendSms(model: SmsData, isValid: boolean) {
       this.submitted = true;
        if (isValid) {
        this.smsService.sendSms(model)
            .subscribe(
                data => {
                    this.alertService.success("OTP Sent Succesfully");
                },
                error => {
                    this.alertService.error("Mobile number you have entered is not valid");
                });
        }
  }
}
