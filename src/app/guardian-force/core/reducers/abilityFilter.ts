import { AbilityType } from '../../../models/abilities';
import {
    AbilityFilterAction,
    AbilityFilterActionTypes
} from '../actions/abilityFilter';

export interface State {
    selectedAbilityType: string | null;
    selectedAbility: string | null;
}

export const initialState: State = {
    selectedAbilityType: null,
    selectedAbility: null
};

export function reducer(
    state: State = initialState,
    action: AbilityFilterAction
): State {
    switch (action.type) {
        case AbilityFilterActionTypes.ResetFilters:
            return initialState;
        case AbilityFilterActionTypes.UpdateSelectedAbility:
            return {
                ...state,
                selectedAbility: action.payload
            };
        case AbilityFilterActionTypes.UpdateSelectedAbilityType:
            return {
                ...state,
                selectedAbilityType: action.payload
            };
        default:
            return state;
    }
}

export const getSelectedAbilityType = (state: State) =>
    state.selectedAbilityType;

export const getSelectedAbility = (state: State) => state.selectedAbility;
