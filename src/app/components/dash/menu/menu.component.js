"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_1 = require("../../../services/index");
var MenuComponent = (function () {
    function MenuComponent(_fb, router, menuService, alertService) {
        this._fb = _fb;
        this.router = router;
        this.menuService = menuService;
        this.alertService = alertService;
        this.events = []; // use later to display form changes
        this.loading = false;
        this.model = {};
    }
    MenuComponent.prototype.ngOnInit = function () {
        // the short way
        this.menuForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            restid: ['', forms_1.Validators.required],
            fullprice: ['', forms_1.Validators.required],
            halfprice: [''],
            longDesc: [''],
            shortDesc: [''],
            lat: ['', forms_1.Validators.required],
            long: ['', forms_1.Validators.required],
            type: ['', forms_1.Validators.required],
            category: ['', forms_1.Validators.required],
            created: [Date.now(), forms_1.Validators.required],
            updated: [Date.now(), forms_1.Validators.required],
        });
        // subscribe to form changes  
        // this.subcribeToFormChanges();
        // Update single value
        //(<FormControl>this.myForm.controls['name'])
        // .setValue('John', { onlySelf: true });
    };
    // subcribeToFormChanges() {
    //     const myFormStatusChanges$ = this.myForm.statusChanges;
    //     const myFormValueChanges$ = this.myForm.valueChanges;
    //     myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    //     myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    // }
    MenuComponent.prototype.add = function (model, isValid) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            this.loading = true;
            this.menuService.add(model)
                .subscribe(function (data) {
                _this.loading = false;
                _this.alertService.success('Item added successful', true);
                _this.router.navigate(['/dashboard']);
            }, function (error) {
                _this.alertService.error(error._body);
                _this.loading = false;
            });
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'menu',
        templateUrl: 'menu.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        index_1.MenuService,
        index_1.AlertService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map