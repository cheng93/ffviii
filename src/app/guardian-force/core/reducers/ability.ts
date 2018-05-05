import { AllGuardianForces } from '../../../models/guardian-forces';
import { AbilityAction, AbilityActionTypes } from '../actions/ability';

export interface State {
    [key: string]: string[];
}

export const initialState: State = Object.values(AllGuardianForces).reduce(
    (acc, value) => ({
        ...acc,
        [value.name]: value.abilities.map(x => x.name)
    }),
    {}
);

export function reducer(
    state: State = initialState,
    action: AbilityAction
): State {
    switch (action.type) {
        case AbilityActionTypes.Delete:
            return {
                ...state,
                [action.payload.gf]: state[action.payload.gf].filter(
                    x => x !== action.payload.ability
                )
            };
        case AbilityActionTypes.Reset:
            return initialState;
        default:
            return state;
    }
}
