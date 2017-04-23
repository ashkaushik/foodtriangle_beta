import { Component, OnInit, Input, Output } from '@angular/core';
<<<<<<< HEAD
 
import { User } from '../../models/index';
import { UserService } from '../../services/index';
 
=======
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/index';
import { UserService } from '../../services/index';

>>>>>>> origin/foodtriangle_node
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
<<<<<<< HEAD
 
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
=======

export class HomeComponent implements OnInit {
    currentUser: User;
    role: string;
    users: User[] = [];

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        if (this.currentUser) {
            if (this.currentUser.role == "Application Support" || this.currentUser.role == "Customer Service" || this.currentUser.role == "Customer Desk" || this.currentUser.role == "kitchen chief") {
                this.router.navigate(['/dashboard']);
            }
        }
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

>>>>>>> origin/foodtriangle_node
}