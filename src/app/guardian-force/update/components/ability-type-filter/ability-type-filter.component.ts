import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AbilityType } from '../../../../models/abilities';

export interface AbilityTypeFilterOption {
    value: string;
    display: AbilityType;
}

@Component({
    selector: 'ability-type-filter',
    templateUrl: './ability-type-filter.template.html',
    styleUrls: ['./ability-type-filter.style.scss']
})
export class AbilityTypeFilterComponent {
    @Input() options!: AbilityTypeFilterOption[];

    @Input() selected!: string;

    @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

    onChange(value: string) {
        this.selectedChange.emit(value);
    }
}
