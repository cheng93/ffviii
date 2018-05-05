import { Ability, AbilityMap } from './ability';

export class AlertAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Prevents Back Attack';
    readonly name: string = 'Alert';
}

export class MoveFindAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Finds hidden Save/Draw Points';
    readonly name: string = 'Move-Find';
}

export class EncHalfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Cuts encounter rate by half';
    readonly name: string = 'Enc-Half';
}

export class EncNoneAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'No encounters';
    readonly name: string = 'Enc-None';
}

export class RareItemAbility implements Ability {
    readonly ap: number | null = 250;
    readonly description: string = 'More likely to receive rare items';
    readonly name: string = 'Rare Item';
}

class _PartyAbilities implements AbilityMap {
    [key: string]: Ability;
    readonly Alert: Ability = new AlertAbility();
    readonly MoveFind: Ability = new MoveFindAbility();
    readonly EncHalf: Ability = new EncHalfAbility();
    readonly EncNone: Ability = new EncNoneAbility();
    readonly RareItem: Ability = new RareItemAbility();
}

export const PartyAbilities = new _PartyAbilities();
