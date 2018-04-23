import { JunctionAbilities } from './junction';
import { CharacterAbilities } from './character';
import { PartyAbilities } from './party';
import { GuardianForceAbilities } from './guardian-force';
import { MenuAbilities } from './menu';
import { CommandAbilities } from './command';

export interface Ability {
    ap: number | null;
    description: string;
    name: string;
}

export interface AbilityMap {
    [key: string]: AbilityMap | Ability;
}

class _AllAbilities implements AbilityMap {
    [key: string]: AbilityMap | Ability;
    readonly Character = CharacterAbilities;
    readonly Command = CommandAbilities;
    readonly GuardianForce = GuardianForceAbilities;
    readonly Junction = JunctionAbilities;
    readonly Menu = MenuAbilities;
    readonly Party = PartyAbilities;
}

export const AllAbilities = new _AllAbilities();
