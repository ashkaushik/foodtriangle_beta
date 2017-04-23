import { Component } from '@angular/core';
<<<<<<< HEAD
import {TaskService} from './services/index';
import { User } from './models/index';
import { UserService } from './services/index';

=======
>>>>>>> origin/foodtriangle_node

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
<<<<<<< HEAD
  providers:[TaskService],
})

export class AppComponent {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
}
=======
})

export class AppComponent { }
>>>>>>> origin/foodtriangle_node
