import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromAbility from '../../../core/reducers/ability';
import * as fromGuardianForce from '../../../core/reducers';
import { AbilityAction, DeleteAbility } from '../../../core/actions/ability';

@Component({
    selector: 'abilities-section',
    templateUrl: './abilities-section.template.html',
    styleUrls: ['./abilities-section.style.scss']
})
export class AbilitiesSectionComponent {
    constructor(private store: Store<fromGuardianForce.State>) {
        this.abilities$ = store.pipe(
            select(fromGuardianForce.getGuardianForceAbilityState),
            map((state: fromAbility.State) => state[this.guardianForce])
        );
    }

    @Input() guardianForce!: string;

    abilities$: Observable<string[]>;

    onDelete(ability: string): void {
        const action: AbilityAction = new DeleteAbility({
            ability: ability,
            gf: this.guardianForce
        });

        this.store.dispatch(action);
    }
}
