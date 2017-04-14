import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent, LoginComponent, RegisterComponent, DashboardComponent } from './components/index';

import { HomeComponent, LoginComponent, RegisterComponent, SearchComponent} from './components/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'search', component: SearchComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
