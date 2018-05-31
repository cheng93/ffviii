import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbilityActionTypes } from '../actions/ability';
import { ResetFilters } from '../actions/abilityFilter';

@Injectable()
export class AbilityEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    resetFilter$: Observable<Action> = this.actions$.pipe(
        ofType(AbilityActionTypes.AddAbility),
        map(action => new ResetFilters())
    );
}
