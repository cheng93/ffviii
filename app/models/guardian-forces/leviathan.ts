import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class LeviathanGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.MagJ,
        AllAbilities.Junction.SprJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJx2,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Recover,
        AllAbilities.Character.SprPlus20,
        AllAbilities.Character.SprPlus40,
        AllAbilities.Character.SprBonus,
        AllAbilities.Character.AutoPotion,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.SuptMagRf,
        AllAbilities.Menu.GfRecovMedRf
    ].slice();
    readonly name: string = 'Leviathan';
}
