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
<<<<<<< HEAD
var index_1 = require("../../services/index");
var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
=======
var router_1 = require("@angular/router");
var index_1 = require("../../services/index");
var HomeComponent = (function () {
    function HomeComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
>>>>>>> origin/foodtriangle_node
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
<<<<<<< HEAD
=======
        if (this.currentUser) {
            if (this.currentUser.role == "Application Support" || this.currentUser.role == "Customer Service" || this.currentUser.role == "Customer Desk" || this.currentUser.role == "kitchen chief") {
                this.router.navigate(['/dashboard']);
            }
        }
>>>>>>> origin/foodtriangle_node
    };
    HomeComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
<<<<<<< HEAD
    __metadata("design:paramtypes", [index_1.UserService])
=======
    __metadata("design:paramtypes", [index_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
>>>>>>> origin/foodtriangle_node
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map