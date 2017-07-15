import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { routing } from './app.routing';
import {APP_BASE_HREF} from '@angular/common';
import { AppConfig } from './app.config';
import { CommonModule } from '@angular/common';


import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService, MenuService, SmsService } from './services/index';
import { HomeComponent, LoginComponent, RegisterComponent, SearchComponent, DashComponent, MenuComponent} from './components/index';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,ReactiveFormsModule, routing, CommonModule],
  declarations: [AppComponent,
                 AlertComponent,
                 HomeComponent,
                 LoginComponent,
                 RegisterComponent,
                 SearchComponent,
                 DashComponent,
                 MenuComponent
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        MenuService,
        SmsService,
        AppConfig,
        {provide: APP_BASE_HREF, useValue : '/' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
