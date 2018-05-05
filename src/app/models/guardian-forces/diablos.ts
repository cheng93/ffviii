import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class DiablosGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.HpJ,
        AllAbilities.Junction.MagJ,
        AllAbilities.Junction.HitJ,
        AllAbilities.Junction.AbilityX3,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Darkside,
        AllAbilities.Character.HpPlus20,
        AllAbilities.Character.HpPlus40,
        AllAbilities.Character.HpPlus80,
        AllAbilities.Character.MagPlus20,
        AllAbilities.Character.MagPlus40,
        AllAbilities.Character.Mug,
        AllAbilities.Party.EncHalf,
        AllAbilities.Party.EncNone,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.Menu.StMagRf,
        AllAbilities.Menu.TimeMagRf
    ].slice();
    readonly name: string = 'Diablos';
}
