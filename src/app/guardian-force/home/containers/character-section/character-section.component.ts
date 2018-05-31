import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character, AllCharacters } from '../../../../models/character';
import { CharacterSectionService } from './character-section.service';

@Component({
    selector: 'character-section',
    templateUrl: './character-section.template.html',
    styleUrls: ['./character-section.style.scss']
})
export class CharacterSectionComponent {
    constructor(private characterSectionService: CharacterSectionService) {}

    getAbilities$(name: string): Observable<string[]> {
        return this.characterSectionService.getCharacterAbilities(name);
    }

    characters: Character[] = Object.values(AllCharacters);
}
