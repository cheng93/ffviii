import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class IfritGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.HpJ,
        AllAbilities.Junction.StrJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJ,
        AllAbilities.Junction.ElemDefJx2,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.MadRush,
        AllAbilities.Character.StrPlus20,
        AllAbilities.Character.StrPlus40,
        AllAbilities.Character.StrBonus,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.FMagRf,
        AllAbilities.Menu.AmmoRf
    ].slice();
    readonly name: string = 'Ifrit';
}
