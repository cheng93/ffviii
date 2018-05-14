import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    AbilityType,
    AllAbilities,
    Ability,
    AbilityMap
} from '../../../../models/abilities';
import * as fromGuardianForce from '../../../core/reducers';
import { AllGuardianForces } from '../../../../models/guardian-forces';
import { map } from 'rxjs/operators';

@Injectable()
export class AddAbilityService {
    constructor(private store: Store<fromGuardianForce.GuardianForceState>) {}

    getAbilityTypes(gf: string): Observable<string[]> {
        return this.store.pipe(
            select(fromGuardianForce.getGuardianForceAbilityState),
            map(state =>
                Object.keys(AbilityType).filter(x =>
                    Object.values(AllAbilities[x]).some(
                        y =>
                            Object.values(AllAbilities[x]).some(
                                y =>
                                    !(y as Ability).unique &&
                                    !state[gf].includes((y as Ability).name)
                            ) ||
                            AllGuardianForces[gf].defaultAbilities.some(
                                y =>
                                    new Set(Object.values(AllAbilities[x])).has(
                                        y
                                    ) &&
                                    !state[gf].includes((y as Ability).name)
                            )
                    )
                )
            )
        );
    }

    getAbilities(gf: string, abilityType: string): Observable<string[]> {
        return this.store.pipe(
            select(fromGuardianForce.getGuardianForceAbilityState),
            map(state =>
                Object.values(AllAbilities[abilityType])
                    .filter(
                        x =>
                            !state[gf].includes((x as Ability).name) &&
                            (!(x as Ability).unique ||
                                AllGuardianForces[gf].defaultAbilities.some(
                                    y => y == x
                                ))
                    )
                    .map(x => (x as Ability).name)
            )
        );
    }
}
