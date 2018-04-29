import { Component, Input } from '@angular/core';

@Component({
    selector: 'menu-item',
    template: require('./menu-item.template.html')
})
export class MenuItemComponent {
    @Input() name!: string;

    @Input() enabled!: boolean;
}
