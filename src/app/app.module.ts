import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import { routing } from './app.routing';
import {APP_BASE_HREF} from '@angular/common';
import { AppConfig } from './app.config';


import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent, LoginComponent, RegisterComponent} from './components/index';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing],
  declarations: [AppComponent, 
                 TasksComponent,
                 AlertComponent,
                 HomeComponent,
                 LoginComponent,
                 RegisterComponent
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        AppConfig,
        {provide: APP_BASE_HREF, useValue : '/' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
