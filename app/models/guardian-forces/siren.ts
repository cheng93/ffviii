import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class SirenGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.MagJ,
        AllAbilities.Junction.StAtkJ,
        AllAbilities.Junction.StDefJ,
        AllAbilities.Junction.StDefJx2,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Treatment,
        AllAbilities.Character.MagPlus20,
        AllAbilities.Character.MagPlus40,
        AllAbilities.Character.MagBonus,
        AllAbilities.Party.MoveFind,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.LMagRf,
        AllAbilities.Menu.StMedRf,
        AllAbilities.Menu.ToolRf
    ].slice();
    readonly name: string = 'Siren';
}
