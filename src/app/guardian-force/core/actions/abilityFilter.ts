import { Action } from '@ngrx/store';
import { AbilityType } from '../../../models/abilities';

export enum AbilityFilterActionTypes {
    ResetFilters = '[AbilityFilter] Reset Filters',
    UpdateSelectedAbility = '[AbilityFilter] Update Selected Ability',
    UpdateSelectedAbilityType = '[AbilityFilter] Update Selected Ability Type'
}

export class ResetFilters implements Action {
    readonly type = AbilityFilterActionTypes.ResetFilters;

    constructor() {}
}

export class UpdateSelectedAbility implements Action {
    readonly type = AbilityFilterActionTypes.UpdateSelectedAbility;

    constructor(public payload: AbilityType | null) {}
}

export class UpdateSelectedAbilityType implements Action {
    readonly type = AbilityFilterActionTypes.UpdateSelectedAbilityType;

    constructor(public payload: AbilityType | null) {}
}

export type AbilityFilterAction =
    | ResetFilters
    | UpdateSelectedAbility
    | UpdateSelectedAbilityType;
