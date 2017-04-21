import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Menu } from '../../../models/index';
import { AlertService, MenuService } from '../../../services/index';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html'
})


export class MenuComponent implements OnInit {
    public menuForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    loading = false;
    model: any = {};
    constructor(
        private _fb: FormBuilder,
        private router: Router,
        private menuService: MenuService,
        private alertService: AlertService,
    ) { }

    ngOnInit() {
        // the short way
        this.menuForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            restid:['',<any>Validators.required],
            fullprice:['',<any>Validators.required],
            halfprice:[''],
            longDesc:[''],
            shortDesc:[''],
            lat:['',<any>Validators.required],
            long:['',<any>Validators.required],
            type:['',<any>Validators.required],
            category:['',<any>Validators.required],
            created:[Date.now(),<any>Validators.required],
            updated:[Date.now(),<any>Validators.required],

            
            // address: this._fb.group({
            //     email: ['', <any>Validators.required, ],
            //     postcode: ['']
            // })
        });

        // subscribe to form changes  
        // this.subcribeToFormChanges();

        // Update single value
        //(<FormControl>this.myForm.controls['name'])
        // .setValue('John', { onlySelf: true });
    }

    // subcribeToFormChanges() {
    //     const myFormStatusChanges$ = this.myForm.statusChanges;
    //     const myFormValueChanges$ = this.myForm.valueChanges;

    //     myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    //     myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    // }

    add(model: Menu, isValid: boolean) {
        this.submitted = true;
        if (isValid) {
            console.log(model);
            this.loading = true;
            this.menuService.add(model)
                .subscribe(
                data => {
                    this.loading = false;
                    this.alertService.success('Item added successful', true);
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
        }
    }
}