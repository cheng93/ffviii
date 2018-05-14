import * as fromRoot from '../../app.reducers';
import * as fromBack from './back';
import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';

export interface ToolbarState {
    back: fromBack.State;
}

export interface State extends fromRoot.State {
    toolbar: ToolbarState;
}

export const reducers: ActionReducerMap<ToolbarState, any> = {
    back: fromBack.reducer
};

export const getToolbarState = createFeatureSelector<ToolbarState>('toolbar');

export const getBackState = createSelector(
    getToolbarState,
    state => state.back
);

export const getBackShowBack = createSelector(
    getBackState,
    fromBack.getShowBack
);
