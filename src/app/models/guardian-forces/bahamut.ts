import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class BahamutGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.AbilityX4,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Character.StrPlus60,
        AllAbilities.Character.MagPlus60,
        AllAbilities.Character.Mug,
        AllAbilities.Character.MoveHpUp,
        AllAbilities.Character.AutoProtect,
        AllAbilities.Character.ExpendX2,
        AllAbilities.Party.RareItem,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.SumMagPlus40,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.GfHpPlus40,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.ForbidMagRf
    ].slice();
    readonly name: string = 'Bahamut';
}
