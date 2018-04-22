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

export class AllAbilities {
    static readonly Character = CharacterAbilities;
    static readonly Command = CommandAbilities;
    static readonly GuardianForce = GuardianForceAbilities;
    static readonly Junction = JunctionAbilities;
    static readonly Menu = MenuAbilities;
    static readonly Party = PartyAbilities;
}
