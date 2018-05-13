import { Ability, AbilityMap } from './ability';
import { CharacterAbilities } from './character';
import { CommandAbilities } from './command';
import { GuardianForceAbilities } from './guardian-force';
import { JunctionAbilities } from './junction';
import { MenuAbilities } from './menu';
import { PartyAbilities } from './party';

class _AllAbilities implements AbilityMap {
    [key: string]: AbilityMap | Ability;
    readonly Character = CharacterAbilities;
    readonly Command = CommandAbilities;
    readonly GuardianForce = GuardianForceAbilities;
    readonly Junction = JunctionAbilities;
    readonly Menu = MenuAbilities;
    readonly Party = PartyAbilities;
}

export * from './ability';
export * from './character';
export * from './command';
export * from './guardian-force';
export * from './junction';
export * from './menu';
export * from './party';

export const AllAbilities = new _AllAbilities();

export enum AbilityType {
    Character = 'Character',
    Command = 'Command',
    GuardianForce = 'Guardian Force',
    Junction = 'Junction',
    Menu = 'Menu',
    Party = 'Party'
}
