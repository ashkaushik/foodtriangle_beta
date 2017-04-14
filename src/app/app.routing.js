"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./components/index");
var index_2 = require("./guards/index");
var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '', component: index_1.HomeComponent },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_1.RegisterComponent },
    { path: 'dashboard', component: index_1.DashboardComponent, canActivate: [index_2.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map