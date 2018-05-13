import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromGuardianForce from '../../../core/reducers';

@Injectable()
export class MenuSectionService {
    constructor(private store: Store<fromGuardianForce.State>) {}

    getMenuAbilities(): Observable<string[]> {
        return this.store.pipe(
            select(fromGuardianForce.getGuardianForceState),
            map((state: fromGuardianForce.GuardianForceState) =>
                Object.keys(state.select).reduce(
                    (acc, key) => [...new Set([...acc, ...state.ability[key]])],
                    <string[]>[]
                )
            )
        );
    }
}
