import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class QuezacotlGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.HpJ,
        AllAbilities.Junction.VitJ,
        AllAbilities.Junction.MagJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJ,
        AllAbilities.Junction.ElemDefJx2,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Card,
        AllAbilities.Character.MagPlus20,
        AllAbilities.Character.MagPlus40,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.TMagRf,
        AllAbilities.Menu.MidMagRf,
        AllAbilities.Menu.CardMod
    ].slice();
    readonly name: string = 'Quezacotl';
}
