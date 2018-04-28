import { Action } from '@ngrx/store';

export enum SelectActionTypes {
    Remove = '[Select] Remove',
    Upsert = '[Select] Upsert'
}

export interface UpsertPayload {
    gf: string;
    character: string;
}

export class Remove implements Action {
    readonly type = SelectActionTypes.Remove;

    constructor(public payload: string) {}
}

export class Upsert implements Action {
    readonly type = SelectActionTypes.Upsert;

    constructor(public payload: UpsertPayload) {}
}

export type SelectAction = Remove | Upsert;
