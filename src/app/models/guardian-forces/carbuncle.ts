import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities';

export class CarbuncleGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.HpJ,
        AllAbilities.Junction.VitJ,
        AllAbilities.Junction.MagJ,
        AllAbilities.Junction.StAtkJ,
        AllAbilities.Junction.StDefJ,
        AllAbilities.Junction.StDefJx2,
        AllAbilities.Junction.AbilityX3,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Character.HpPlus20,
        AllAbilities.Character.HpPlus40,
        AllAbilities.Character.VitPlus20,
        AllAbilities.Character.VitPlus40,
        AllAbilities.Character.VitBonus,
        AllAbilities.Character.Counter,
        AllAbilities.Character.AutoReflect,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.Menu.RecovMedRf
    ].slice();
    readonly name: string = 'Carbuncle';
}
