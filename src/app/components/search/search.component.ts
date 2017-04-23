import { Component, OnInit, Input, Output } from '@angular/core';

import { User } from '../../models/index';
import { UserService } from '../../services/index';

import { Menu } from '../../models/index';
import { MenuService } from '../../services/index';
@Component({
  moduleId: module.id,
  templateUrl: 'search.component.html',
})

export class SearchComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    items: Menu[] = [];
    loading = false;

    constructor(private menuService:MenuService,private userService:UserService) {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadsearchItems();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadsearchItems() {
        this.loading = true;
        this.menuService.getAll().subscribe(items => { this.items = items; this.loading = false; }); 
    }
}
