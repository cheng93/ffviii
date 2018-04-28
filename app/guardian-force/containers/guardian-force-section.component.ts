import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GuardianForce, AllGuardianForces } from '../../models/guardian-forces';
import { SelectAction, Upsert, Remove } from '../actions/select';
import * as fromGuardianForce from '../reducers';
import * as fromSelect from '../reducers/select';

@Component({
    selector: 'guardian-force-section',
    template: require('./guardian-force-section.template.html')
})
export class GuardianForceSectionComponent {
    constructor(private store: Store<fromGuardianForce.State>) {
        this.selectState$ = store.pipe(
            select(fromGuardianForce.getGuardianForceSelectState)
        );
    }

    selectState$: Observable<fromSelect.State>;

    guardianForces: GuardianForce[] = Object.values(AllGuardianForces);

    onChange(character: string, gf: string) {
        const action: SelectAction = character
            ? new Upsert({ character: character, gf: gf })
            : new Remove(gf);

        this.store.dispatch(action);
    }

    ghost: Array<number> = [...Array(8).keys()];
}
