import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class ShivaGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.StrJ,
        AllAbilities.Junction.VitJ,
        AllAbilities.Junction.SprJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJ,
        AllAbilities.Junction.ElemDefJx2,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Doom,
        AllAbilities.Character.VitPlus20,
        AllAbilities.Character.VitPlus40,
        AllAbilities.Character.SprPlus20,
        AllAbilities.Character.SprPlus40,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.IMagRf
    ].slice();
    readonly name: string = 'Shiva';
}
