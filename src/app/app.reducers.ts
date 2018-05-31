import {
    ActionReducerMap,
    ActionReducer,
    Action,
    MetaReducer,
    createFeatureSelector
} from '@ngrx/store';
import { environment } from '../environment/environment';

export interface State {}

export const reducers: ActionReducerMap<State, any> = {};

export function logger(
    reducer: ActionReducer<State, any>
): ActionReducer<State, any> {
    return function(state: State | undefined, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = environment.isDevelopment
    ? [logger]
    : [];
