import { Action } from '@ngrx/store';

export enum SelectActionTypes {
    RemoveGuardianForce = '[Select] Remove Guardian Force',
    UpsertGuardianForce = '[Select] Upsert Guardian Force'
}

export interface UpsertPayload {
    gf: string;
    character: string;
}

export class RemoveGuardianForce implements Action {
    readonly type = SelectActionTypes.RemoveGuardianForce;

    constructor(public payload: string) {}
}

export class UpsertGuardianForce implements Action {
    readonly type = SelectActionTypes.UpsertGuardianForce;

    constructor(public payload: UpsertPayload) {}
}

export type SelectAction = RemoveGuardianForce | UpsertGuardianForce;
