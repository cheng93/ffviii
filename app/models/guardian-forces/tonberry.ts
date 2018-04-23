import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class TonberryGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.LvDown,
        AllAbilities.Command.LvUp,
        AllAbilities.Character.EvaPlus30,
        AllAbilities.Character.LuckPlus50,
        AllAbilities.Character.Initiative,
        AllAbilities.Character.AutoPotion,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.Haggle,
        AllAbilities.Menu.SellHigh,
        AllAbilities.Menu.Familiar,
        AllAbilities.Menu.CallShop
    ].slice();
    readonly name: string = 'Tonberry';
}
