import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';
import { GuardianForce } from '../../models/guardian-forces';

@Component({
    selector: 'character',
    template: require('./character.template.html')
})
export class CharacterComponent {
    @Input() character!: Character;

    @Input() abilities!: string[];
}
