import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import * as fromAbility from './ability';
import * as fromAbilityFilter from './abilityFilter';
import * as fromSelect from './select';
import * as fromRoot from '../../../app.reducers';

export interface GuardianForceState {
    ability: fromAbility.State;
    abilityFilter: fromAbilityFilter.State;
    select: fromSelect.State;
}

export interface State extends fromRoot.State {
    guardianForce: GuardianForceState;
}

export const reducers: ActionReducerMap<GuardianForceState, any> = {
    ability: fromAbility.reducer,
    abilityFilter: fromAbilityFilter.reducer,
    select: fromSelect.reducer
};

export const getGuardianForceState = createFeatureSelector<GuardianForceState>(
    'guardianForce'
);

export const getGuardianForceAbilityState = createSelector(
    getGuardianForceState,
    state => state.ability
);

export const getGuardianForceAbilityFilterState = createSelector(
    getGuardianForceState,
    state => state.abilityFilter
);

export const getGuardianForceSelectState = createSelector(
    getGuardianForceState,
    state => state.select
);
