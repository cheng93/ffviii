import { GuardianForce } from './guardian-force';
import { Ability, AllAbilities } from '../abilities/ability';

export class CerberusGuardianForce implements GuardianForce {
    constructor() {
        this.abilities = this.defaultAbilities;
    }

    abilities: Ability[];
    readonly defaultAbilities: Ability[] = [
        AllAbilities.Junction.StrJ,
        AllAbilities.Junction.MagJ,
        AllAbilities.Junction.SprJ,
        AllAbilities.Junction.SpdJ,
        AllAbilities.Junction.HitJ,
        AllAbilities.Junction.StAtkJ,
        AllAbilities.Junction.StDefJ,
        AllAbilities.Junction.StDefJx2,
        AllAbilities.Junction.StDefJx4,
        AllAbilities.Junction.AbilityX3,
        AllAbilities.Command.Magic,
        AllAbilities.Command.Gf,
        AllAbilities.Command.Draw,
        AllAbilities.Command.Item,
        AllAbilities.Character.SpdPlus20,
        AllAbilities.Character.SpdPlus40,
        AllAbilities.Character.AutoHaste,
        AllAbilities.Character.ExpendX2,
        AllAbilities.Party.Alert,
        AllAbilities.GuardianForce.GfHpPlus10,
        AllAbilities.GuardianForce.GfHpPlus20,
        AllAbilities.GuardianForce.GfHpPlus30
    ].slice();
    readonly name: string = 'Cerberus';
}
