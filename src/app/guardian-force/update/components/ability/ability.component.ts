import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ability',
    templateUrl: './ability.template.html',
    styleUrls: ['./ability.style.scss']
})
export class AbilityComponent {
    @Input() ability!: string;

    @Output() delete: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.delete.emit(this.ability);
    }
}
