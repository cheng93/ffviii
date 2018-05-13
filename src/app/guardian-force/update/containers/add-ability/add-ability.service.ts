import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    AbilityType,
    AllAbilities,
    Ability,
    AbilityMap
} from '../../../../models/abilities';
import * as fromGuardianForce from '../../../core/reducers';
import { AllGuardianForces } from '../../../../models/guardian-forces';

@Injectable()
export class AddAbilityService {
    constructor(private state: Store<fromGuardianForce.GuardianForceState>) {}

    getAbilityTypes(gf: string): string[] {
        return Object.keys(AbilityType).filter(
            x =>
                Object.values(AllAbilities[x]).some(
                    (y: Ability | AbilityMap) => !(y as Ability).unique
                ) ||
                AllGuardianForces[gf].defaultAbilities.some((y: Ability) =>
                    new Set(Object.values(AllAbilities[x])).has(y)
                )
        );
    }

    getAbilities(gf: string, abilityType: string): string[] {
        return Object.values(AllAbilities[abilityType])
            .filter(
                x =>
                    !(x as Ability).unique ||
                    AllGuardianForces[gf].defaultAbilities.some(y => y == x)
            )
            .map(x => (x as Ability).name);
    }
}
