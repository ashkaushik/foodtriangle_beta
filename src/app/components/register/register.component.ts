import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/index';
import { AlertService, UserService } from '../../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    public regForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    loading = false;
    model: any = {};

    constructor(
        private _fb: FormBuilder,
        private router: Router,
        private userService: UserService,
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

    register(model: User, isValid: boolean) {
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            this.userService.create(model)
                .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
        }
    }
}