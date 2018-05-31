import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Character, AllCharacters } from '../../../../models/character';
import { GuardianForce } from '../../../../models/guardian-forces';

@Component({
    selector: 'guardian-force',
    templateUrl: './guardian-force.template.html',
    styleUrls: ['./guardian-force.style.scss']
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
