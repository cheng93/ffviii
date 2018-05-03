import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import * as fromAbility from './ability';
import * as fromSelect from './select';
import * as fromRoot from '../../../app.reducers';

export interface GuardianForceState {
    ability: fromAbility.State;
    select: fromSelect.State;
}

export interface State extends fromRoot.State {
    guardianForce: GuardianForceState;
}

export const reducers: ActionReducerMap<GuardianForceState, any> = {
    ability: fromAbility.reducer,
    select: fromSelect.reducer
};

export const getGuardianForceState = createFeatureSelector<GuardianForceState>(
    'guardianForce'
);

export const getGuardianForceSelectState = createSelector(
    getGuardianForceState,
    state => state.select
);

export const getGuardianForceAbilityState = createSelector(
    getGuardianForceState,
    state => state.ability
);
