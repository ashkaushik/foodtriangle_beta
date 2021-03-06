import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, LoginComponent, RegisterComponent, SearchComponent, DashComponent, MenuComponent} from './components/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'search', component: SearchComponent },
    { path: 'dashboard', component: DashComponent ,canActivate: [AuthGuard]},
    { path: 'additem', component: MenuComponent ,canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
