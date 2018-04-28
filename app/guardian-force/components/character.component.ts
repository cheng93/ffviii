import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';
import { GuardianForce } from '../../models/guardian-forces';
import {
    CharacterAbilities,
    CommandAbilities,
    JunctionAbilities,
    PartyAbilities
} from '../../models/abilities';

@Component({
    selector: 'character',
    template: require('./character.template.html')
})
export class CharacterComponent {
    @Input() character!: Character;

    @Input() abilities!: string[];

    characterAbilities: string[] = Object.values(CharacterAbilities).map(
        x => x.name
    );
    commandAbilities: string[] = Object.values(CommandAbilities).map(
        x => x.name
    );
    junctionAbilities: string[] = Object.values(JunctionAbilities).map(
        x => x.name
    );
    partyAbilities: string[] = Object.values(PartyAbilities).map(x => x.name);
}
