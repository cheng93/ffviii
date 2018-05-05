import { Action } from '@ngrx/store';

export enum AbilityActionTypes {
    Delete = '[Ability] Delete',
    Reset = '[Ability] Reset'
}

export interface DeletePayload {
    ability: string;
    gf: string;
}

export class Delete implements Action {
    readonly type = AbilityActionTypes.Delete;

    constructor(public payload: DeletePayload) {}
}

export class Reset implements Action {
    readonly type = AbilityActionTypes.Reset;

    constructor(public payload: string) {}
}

export type AbilityAction = Delete | Reset;
