import { Action } from '@ngrx/store';

export enum AbilityActionTypes {
    Delete = '[Ability] Delete'
}

export interface DeletePayload {
    ability: string;
    gf: string;
}

export class Delete implements Action {
    readonly type = AbilityActionTypes.Delete;

    constructor(public payload: DeletePayload) {}
}

export type AbilityAction = Delete;
