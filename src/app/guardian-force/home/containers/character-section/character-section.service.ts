import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromGuardianForce from '../../../core/reducers';

@Injectable()
export class CharacterSectionService {
    constructor(private store: Store<fromGuardianForce.State>) {}

    getCharacterAbilities(name: string): Observable<string[]> {
        return this.store.pipe(
            select(fromGuardianForce.getGuardianForceState),
            map((state: fromGuardianForce.GuardianForceState) =>
                Object.entries(state.select)
                    .filter(([key, value]: [string, string]) => value === name)
                    .map(([key, value]: [string, string]) => key)
                    .reduce(
                        (acc: string[], value: string) =>
                            Array.from(
                                new Set([...acc, ...state.ability[value]])
                            ),
                        []
                    )
            )
        );
    }
}
