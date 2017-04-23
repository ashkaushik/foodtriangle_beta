import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

import { HomeComponent, LoginComponent, RegisterComponent,DashboardComponent  } from './components/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
=======
import { HomeComponent, LoginComponent, RegisterComponent, SearchComponent, DashComponent, MenuComponent} from './components/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'search', component: SearchComponent },
    { path: 'dashboard', component: DashComponent ,canActivate: [AuthGuard]},
    { path: 'additem', component: MenuComponent ,canActivate: [AuthGuard]},
>>>>>>> origin/foodtriangle_node

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
