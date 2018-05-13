import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import {
    AbilityType,
    AllAbilities,
    Ability
} from '../../../../models/abilities';
import * as fromGuardianForce from '../../../core/reducers';
import { AbilityTypeFilterOption, AbilityFilterOption } from '../../components';
import {
    UpdateSelectedAbilityType,
    UpdateSelectedAbility,
    ResetFilters
} from '../../../core/actions/abilityFilter';
import { AddAbilityService } from './add-ability.service';

@Component({
    selector: 'add-ability',
    templateUrl: './add-ability.template.html',
    styleUrls: ['./add-ability.style.scss']
})
export class AddAbilityComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private store: Store<fromGuardianForce.GuardianForceState>,
        private addAbilityService: AddAbilityService
    ) {
        this.selectedAbility$ = store.pipe(
            select(fromGuardianForce.getSelectedAbility)
        );

        this.selectedAbilityType$ = store.pipe(
            select(fromGuardianForce.getSelectedAbiityType)
        );
    }

    ngOnInit(): void {
        this.store.dispatch(new ResetFilters());
        this.abilityTypes$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const gf = params.get('gf') as string;
                return this.addAbilityService.getAbilityTypes(gf).pipe(
                    map(x =>
                        x.map(y => ({
                            value: y,
                            display: AbilityType[y as keyof typeof AbilityType]
                        }))
                    )
                );
            })
        );
        this.abilities$ = this.selectedAbilityType$.pipe(
            withLatestFrom(this.route.paramMap),
            switchMap(
                ([abilityType, params]) =>
                    abilityType
                        ? this.addAbilityService
                              .getAbilities(
                                  params.get('gf') as string,
                                  abilityType
                              )
                              .pipe(
                                  map(x =>
                                      x.map(ability => ({
                                          value: ability,
                                          display: ability
                                      }))
                                  )
                              )
                        : []
            )
        );
    }

    onAbilitySelectedChange(abilityType: AbilityType | null) {
        this.store.dispatch(new UpdateSelectedAbility(abilityType));
    }

    onAbilityTypeSelectedChange(abilityType: AbilityType | null) {
        this.store.dispatch(new UpdateSelectedAbilityType(abilityType));
    }

    abilities$!: Observable<AbilityFilterOption[]>;

    abilityTypes$!: Observable<AbilityTypeFilterOption[]>;

    selectedAbility$: Observable<string | null>;

    selectedAbilityType$: Observable<string | null>;
}
