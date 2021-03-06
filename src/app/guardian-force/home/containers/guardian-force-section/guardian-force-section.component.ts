import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    GuardianForce,
    AllGuardianForces
} from '../../../../models/guardian-forces';
import {
    SelectAction,
    UpsertGuardianForce,
    RemoveGuardianForce
} from '../../../core/actions/select';
import * as fromGuardianForce from '../../../core/reducers';
import * as fromSelect from '../../../core/reducers/select';

@Component({
    selector: 'guardian-force-section',
    templateUrl: './guardian-force-section.template.html',
    styleUrls: ['./guardian-force-section.style.scss']
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
            ? new UpsertGuardianForce({ character: character, gf: gf })
            : new RemoveGuardianForce(gf);

        this.store.dispatch(action);
    }

    ghost: Array<number> = [...Array(8).keys()];
}
