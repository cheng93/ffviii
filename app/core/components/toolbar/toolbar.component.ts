import { Component, Input } from '@angular/core';

@Component({
    selector: 'toolbar',
    template: require('./toolbar.template.html')
})
export class ToolbarComponent {
    @Input() title!: string;
}
