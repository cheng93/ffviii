import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ability',
    templateUrl: './ability.template.html',
    styleUrls: ['./ability.template.scss']
})
export class AbilityComponent {
    @Input() ability!: string;

    @Output() delete: EventEmitter<string> = new EventEmitter<string>();

    onClick(event: any) {
        this.delete.emit(event.target.value);
    }
}
