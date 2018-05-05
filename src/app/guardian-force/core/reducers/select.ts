import { SelectAction, SelectActionTypes } from '../actions/select';

export interface State {
    [key: string]: string;
}

export const initialState: State = {};

export function reducer(
    state: State = initialState,
    action: SelectAction
): State {
    switch (action.type) {
        case SelectActionTypes.Remove:
            let { [action.payload]: omit, ...res } = state;
            return res;

        case SelectActionTypes.Upsert:
            return {
                ...state,
                [action.payload.gf]: action.payload.character
            };

        default:
            return initialState;
    }
}
