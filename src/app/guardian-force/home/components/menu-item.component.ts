import { Component, Input } from '@angular/core';

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.template.html'
})
export class MenuItemComponent {
    @Input() name!: string;

    @Input() enabled!: boolean;
}
