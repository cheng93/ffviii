import { Action } from '@ngrx/store';
import { AbilityType } from '../../../models/abilities';

export enum AbilityFilterActionTypes {
    UpdateSelectedAbilityType = '[AbilityFilter] Update Selected Ability Type'
}

export class UpdateSelectedAbilityType implements Action {
    readonly type = AbilityFilterActionTypes.UpdateSelectedAbilityType;

    constructor(public payload: AbilityType | null) {}
}

export type AbilityFilterAction = UpdateSelectedAbilityType;
