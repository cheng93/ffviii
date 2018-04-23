import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class EdenGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.SpdJ,
        AllAbilities.Junction.EvaJ,
        AllAbilities.Junction.HitJ,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.MadRush,
        AllAbilities.Command.Darkside,
        AllAbilities.Command.Devour,
        AllAbilities.Character.LuckPlus50,
        AllAbilities.Character.ExpendX3,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.SumMagPlus40,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.GfHpPlus40,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.GfAblMedRf
    ].slice();
    readonly name: string = 'Eden';
}
