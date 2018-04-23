import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class BrothersGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.HpJ,
        AllAbilities.Junction.StrJ,
        AllAbilities.Junction.SprJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJ,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Defend,
        AllAbilities.Character.HpPlus20,
        AllAbilities.Character.HpPlus40,
        AllAbilities.Character.HpPlus80,
        AllAbilities.Character.HpBonus,
        AllAbilities.Character.Cover,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.Boost
    ].slice();
    readonly name: string = 'Brothers';
}
