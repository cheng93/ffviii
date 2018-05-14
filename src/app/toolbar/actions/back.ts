import { Action } from '@ngrx/store';

export enum BackActionTypes {
    HideBack = '[Back] Hide Back',
    ShowBack = '[Back] Show Back'
}

export class HideBack implements Action {
    readonly type = BackActionTypes.HideBack;
}

export class ShowBack implements Action {
    readonly type = BackActionTypes.ShowBack;
}

export type BackActions = HideBack | ShowBack;
