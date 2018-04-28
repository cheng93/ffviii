import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Character, AllCharacters } from '../../models/character';
import { GuardianForce } from '../../models/guardian-forces';

@Component({
    selector: 'guardian-force',
    template: require('./guardian-force.template.html')
})
export class GuardianForceComponent {
    constructor() {}

    @Input() guardianForce!: GuardianForce;

    @Input() selected!: string;

    @Output() selectChange: EventEmitter<string> = new EventEmitter<string>();

    characters: Character[] = Object.values(AllCharacters);

    onChange(character: string) {
        this.selectChange.emit(character);
    }
}
