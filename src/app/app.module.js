"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var tasks_component_1 = require("./components/tasks/tasks.component");
var app_routing_1 = require("./app.routing");
var common_1 = require("@angular/common");
var app_config_1 = require("./app.config");
var common_2 = require("@angular/common");
var index_1 = require("./directives/index");
var index_2 = require("./guards/index");
var index_3 = require("./services/index");
// import { HomeComponent, LoginComponent, RegisterComponent, DashboardComponent} from './components/index';
var index_4 = require("./components/index");
var core_2 = require("@angular/core");
core_2.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing, common_2.CommonModule],
        declarations: [app_component_1.AppComponent,
            tasks_component_1.TasksComponent,
            index_1.AlertComponent,
            index_4.HomeComponent,
            index_4.LoginComponent,
            index_4.RegisterComponent,
            index_4.SearchComponent
        ],
        providers: [
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            index_3.UserService,
            index_3.TaskService,
            app_config_1.AppConfig,
            { provide: common_1.APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map