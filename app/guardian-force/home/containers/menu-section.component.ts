import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { MenuAbilities } from '../../../models/abilities';
import * as fromGuardianForce from '../../core/reducers';

@Component({
    selector: 'menu-section',
    templateUrl: './menu-section.template.html'
})
export class MenuSectionComponent {
    constructor(private store: Store<fromGuardianForce.State>) {
        this.abilities$ = store.pipe(
            select(fromGuardianForce.getGuardianForceState),
            map((state: fromGuardianForce.GuardianForceState) =>
                Object.keys(state.select).reduce(
                    (acc, key) => [...new Set([...acc, ...state.ability[key]])],
                    <string[]>[]
                )
            )
        );
    }

    abilities$: Observable<string[]>;

    menuAbilities: string[] = Object.values(MenuAbilities).map(x => x.name);
}
