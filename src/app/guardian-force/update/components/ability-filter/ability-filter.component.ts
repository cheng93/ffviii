import { Component, Input, EventEmitter, Output } from '@angular/core';

export interface AbilityFilterOption {
    value: string;
    display: string;
}

@Component({
    selector: 'ability-filter',
    templateUrl: './ability-filter.template.html',
    styleUrls: ['./ability-filter.style.scss']
})
export class AbilityFilterComponent {
    @Input() options!: AbilityFilterOption[];

    @Input() selected!: string;

    @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

    @Output() add: EventEmitter<string> = new EventEmitter<string>();

    onChange(value: string): void {
        this.selectedChange.emit(value);
    }

    onClick(): void {
        this.add.emit(this.selected);
    }
}
