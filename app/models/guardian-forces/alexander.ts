import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class AlexanderGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.SprJ,
        AllAbilities.Junction.ElemAtkJ,
        AllAbilities.Junction.ElemDefJx2,
        AllAbilities.Junction.ElemDefJx4,
        AllAbilities.Junction.AbilityX3,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Command.Revive,
        AllAbilities.Character.SprPlus20,
        AllAbilities.Character.SprPlus40,
        AllAbilities.Character.MedData,
        AllAbilities.GuardianForce.SumMagPlus10,
        AllAbilities.GuardianForce.SumMagPlus20,
        AllAbilities.GuardianForce.SumMagPlus30,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30,
        AllAbilities.GuardianForce.Boost,
        AllAbilities.Menu.HighMagRf,
        AllAbilities.Menu.MedLvUp
    ].slice();
    readonly name: string = 'Alexander';
}
