"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
// import { HomeComponent, LoginComponent, RegisterComponent, DashboardComponent } from './components/index';
var index_1 = require("./components/index");
var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '', component: index_1.HomeComponent },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_1.RegisterComponent },
    { path: 'search', component: index_1.DashboardComponent },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map