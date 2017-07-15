import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/index';
import { AlertService, UserService, SmsService } from '../../services/index';
import { SmsData } from '../../models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    public regForm: FormGroup; // our model driven form
    public otpForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    otp_sent = false;
    loading = false;
    model: any = {};

    constructor(
        private _fb: FormBuilder,
        private router: Router,
        private userService: UserService,
        private smsService: SmsService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.regForm = this._fb.group({
            firstName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            lastName: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            email: ['', <any>Validators.required],
            password: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
            phone: ['', [<any>Validators.required, <any>Validators.minLength(10)]],
            created: [Date.now(), <any>Validators.required],
            updated: [Date.now(), <any>Validators.required],

            role: this._fb.group({
                name: ['foodie', <any>Validators.required,],
                invitedBy: ['self']
            })
        });
    }

    activation(user) {
        this.smsService.sendSms(user)
            .subscribe(
            data => {                
                this.loading = false;
                this.otp_sent = true;
                this.otpForm = this._fb.group({
                    otp: ['',[<any>Validators.required, <any>Validators.minLength(6), <any>Validators.maxLength(6)]],
                    email: [user.email, <any>Validators.required],
                    phone: [user.phone, [<any>Validators.required, <any>Validators.minLength(10)]],
                    updated: [Date.now(), <any>Validators.required],
                    Isactive :['true',<any>Validators.required]
                });

            },
            error => {
                this.alertService.error("Mobile number you have entered is not valid");
                this.router.navigate(['/login']);
            });
    }

    register(model: User, isValid: boolean) {
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            this.userService.create(model)
                .subscribe(
                data => {
                    this.activation(model);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
        }
    }

    verify(model: User, isValid: boolean) {
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            // this.userService.verify(model)
            //     .subscribe(
            //     data => {
            //         this.activation(model);
            //     },
            //     error => {
            //         this.alertService.error(error._body);
            //         this.loading = false;
            //     }); 
        }
    }


}