import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, MenuService } from '../../../services/index';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private menuService: MenuService,
        private alertService: AlertService) { }

    add() {
        this.loading = true;
        this.menuService.add(this.model)
            .subscribe(
            data => {
                this.loading = false;
                this.alertService.success('Item added successful', true);                
                this.router.navigate(['/dashboard']);
            },
            error => {
                this.alertService.error(error._body);
                this.loading = false;
            });
    }
}