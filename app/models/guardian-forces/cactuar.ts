import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class CactuarGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.EvaJ,
        AllAbilities.Junction.LuckJ,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Defend,
        AllAbilities.Command.Kamikaze,
        AllAbilities.Character.EvaPlus30,
        AllAbilities.Character.LuckPlus50,
        AllAbilities.Character.Initiative,
        AllAbilities.Character.MoveHpUp,
        AllAbilities.Character.HpBonus,
        AllAbilities.Character.StrBonus,
        AllAbilities.Character.VitBonus,
        AllAbilities.Character.MagBonus,
        AllAbilities.Character.SprBonus,
        AllAbilities.Character.AutoPotion,
        AllAbilities.Character.ExpendX2,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30
    ].slice();
    readonly name: string = 'Cactuar';
}
