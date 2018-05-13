import { Action } from '@ngrx/store';

export enum AbilityActionTypes {
    AddAbility = '[Ability] Add Ability',
    DeleteAbility = '[Ability] Delete Ability',
    ResetAbilities = '[Ability] Reset Abilities'
}

export interface AbilityPayload {
    ability: string;
    gf: string;
}

export class AddAbility implements Action {
    readonly type = AbilityActionTypes.AddAbility;

    constructor(public payload: AbilityPayload) {}
}

export class DeleteAbility implements Action {
    readonly type = AbilityActionTypes.DeleteAbility;

    constructor(public payload: AbilityPayload) {}
}

export class ResetAbilities implements Action {
    readonly type = AbilityActionTypes.ResetAbilities;

    constructor(public payload: string) {}
}

export type AbilityAction = AddAbility | DeleteAbility | ResetAbilities;
