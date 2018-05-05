import { Component, Input } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.template.html'
})
export class ToolbarComponent {
    @Input() title!: string;
}
