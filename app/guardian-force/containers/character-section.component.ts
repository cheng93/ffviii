import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Character, AllCharacters } from '../../models/character';
import * as fromGuardianForce from '../reducers';

@Component({
    selector: 'character-section',
    template: require('./character-section.template.html')
})
export class CharacterSectionComponent {
    constructor(private store: Store<fromGuardianForce.State>) {
        this.abilities$ = store.pipe(
            select(fromGuardianForce.getGuardianForceState),
            map((state: fromGuardianForce.GuardianForceState) =>
                Object.keys(state.select).reduce(
                    (acc, key) => ({
                        ...acc,
                        [state.select[key]]: Array.from(
                            new Set([
                                ...(acc[state.select[key]] || []),
                                ...state.ability[key]
                            ])
                        )
                    }),
                    <{
                        [character: string]: string[];
                    }>{}
                )
            )
        );
    }

    abilities$: Observable<{ [key: string]: string[] }>;

    characters: Character[] = Object.values(AllCharacters);
}
