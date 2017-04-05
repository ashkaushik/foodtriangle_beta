import { Component } from '@angular/core';
import {TaskService} from './services/index';
import { User } from './models/index';
import { UserService } from './services/index';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService],
})

export class AppComponent {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
}
