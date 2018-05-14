import { BackActions, BackActionTypes } from '../actions/back';

export interface State {
    showBack: boolean;
}

export const initialState: State = {
    showBack: false
};

export function reducer(state = initialState, action: BackActions): State {
    switch (action.type) {
        case BackActionTypes.HideBack:
            return {
                ...state,
                showBack: false
            };
        case BackActionTypes.ShowBack:
            return {
                ...state,
                showBack: true
            };
        default:
            return state;
    }
}

export const getShowBack = (state: State) => state.showBack;
