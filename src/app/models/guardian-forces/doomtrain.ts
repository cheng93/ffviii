import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class DoomtrainGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.StAtkJ,
        AllAbilities.Junction.ElemDefJx4,
        AllAbilities.Junction.StDefJx4,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Darkside,
        AllAbilities.Command.Absorb,
        AllAbilities.Character.AutoShell,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.SumMagPlus40,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.GfHpPlus40,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.JunkShop,
        AllAbilities.Menu.ForbidMedRf
    ].slice();
    readonly name: string = 'Doomtrain';
}
