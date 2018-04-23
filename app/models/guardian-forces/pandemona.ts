import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class PandemonaGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.StrJ,
        AllAbilities.Junction.SpdJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJ,
        AllAbilities.Junction.ElemDefJx2,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Absorb,
        AllAbilities.Character.StrPlus20,
        AllAbilities.Character.StrPlus40,
        AllAbilities.Character.SpdPlus20,
        AllAbilities.Character.SpdPlus40,
        AllAbilities.Character.Initiative,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.Boost
    ].slice();
    readonly name: string = 'Pandemona';
}
