import { Ability } from './ability';

export class HpPlus20Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises HP by 20%';
    readonly name: string = 'HP+20%';
}

export class HpPlus40Ability implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Raises HP by 40%';
    readonly name: string = 'HP+40%';
}

export class HpPlus80Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Raises HP by 80%';
    readonly name: string = 'HP+80%';
}

export class StrPlus20Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises Str by 20%';
    readonly name: string = 'Str+20%';
}

export class StrPlus40Ability implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Raises Str by 40%';
    readonly name: string = 'Str+40%';
}

export class StrPlus60Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Raises Str by 60%';
    readonly name: string = 'Str+60%';
}

export class VitPlus20Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises Vit by 20%';
    readonly name: string = 'Vit+20%';
}

export class VitPlus40Ability implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Raises Vit by 40%';
    readonly name: string = 'Vit+40%';
}

export class VitPlus60Ability implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Raises Vit by 60%';
    readonly name: string = 'Vit+60%';
}

export class MagPlus20Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises Magic by 20%';
    readonly name: string = 'Mag+20%';
}

export class MagPlus40Ability implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Raises Magic by 40%';
    readonly name: string = 'Mag+40%';
}

export class MagPlus60Ability implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Raises Magic by 60%';
    readonly name: string = 'Mag+60%';
}

export class SprPlus20Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises Spr by 20%';
    readonly name: string = 'Spr+20%';
}

export class SprPlus40Ability implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Raises Spr by 40%';
    readonly name: string = 'Spr+40%';
}

export class SprPlus60Ability implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Raises Spr by 60%';
    readonly name: string = 'Spr+60%';
}

export class SpdPlus20Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises Spd by 20%';
    readonly name: string = 'Spd+20%';
}

export class SpdPlus40Ability implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Raises Spd by 40%';
    readonly name: string = 'Spd+40%';
}

export class EvaPlus30Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Raises Eva by 30%';
    readonly name: string = 'Eva+30%';
}

export class LuckPlus50Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Raises Luck by 50%';
    readonly name: string = 'Luck+50%';
}

export class MugAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Change Attack to Mug';
    readonly name: string = 'Mug';
}

export class MedDataAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Doubles the effect of medicine';
    readonly name: string = 'Med Data';
}

export class CounterAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Counterattacks when attacked';
    readonly name: string = 'Counter';
}

export class ReturnDamageAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Returns 1/4 of the damage to the opponent';
    readonly name: string = 'Return Damage';
}

export class CoverAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = 'Receives attack in place of a party member';
    readonly name: string = 'Cover';
}

export class InitiativeAbility implements Ability {
    readonly ap: number | null = 160;
    readonly description: string = 'Enables action as soon as battle begins';
    readonly name: string = 'Initiative';
}

export class MoveHpUpAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Restores HP by walking';
    readonly name: string = 'Move-HP Up';
}

export class HpBonusAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = '+30 Bonus to HP at level up';
    readonly name: string = 'Hp Bonus';
}

export class StrBonusAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = '+1 Bonus to Str at level up';
    readonly name: string = 'Str Bonus';
}

export class VitBonusAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = '+1 Bonus to Vit at level up';
    readonly name: string = 'Vit Bonus';
}

export class MagBonusAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = '+1 Bonus to Mag at level up';
    readonly name: string = 'Mag Bonus';
}

export class SprBonusAbility implements Ability {
    readonly ap: number | null = 100;
    readonly description: string = '+1 Bonus to Spr at level up';
    readonly name: string = 'Spr Bonus';
}

export class AutoProtectAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Protect activates automatically in battle';
    readonly name: string = 'Auto-Protect';
}

export class AutoShellAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Shell activates automatically in battle';
    readonly name: string = 'Auto-Shell';
}

export class AutoReflectAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Reflect activates automatically in battle';
    readonly name: string = 'Auto-Reflect';
}

export class AutoHasteAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Haste activates automatically in battle';
    readonly name: string = 'Auto-Haste';
}

export class AutoPotionAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Use recovery items automatically when hit';
    readonly name: string = 'Auto-Potion';
}

export class ExpendX2Ability implements Ability {
    readonly ap: number | null = 250;
    readonly description: string = 'Only 1 Magic spent while Double';
    readonly name: string = 'Expendx2-1';
}

export class ExpendX3Ability implements Ability {
    readonly ap: number | null = 250;
    readonly description: string = 'Only 1 Magic spent while Triple';
    readonly name: string = 'Expendx3-1';
}

export class RibbonAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Prevents all status abnormality';
    readonly name: string = 'Ribbon';
}

export class CharacterAbilities {
    static readonly HpPlus20: Ability = new HpPlus20Ability();
    static readonly HpPlus40: Ability = new HpPlus40Ability();
    static readonly HpPlus80: Ability = new HpPlus80Ability();
    static readonly StrPlus20: Ability = new StrPlus20Ability();
    static readonly StrPlus40: Ability = new StrPlus40Ability();
    static readonly StrPlus60: Ability = new StrPlus60Ability();
    static readonly VitPlus20: Ability = new VitPlus20Ability();
    static readonly VitPlus40: Ability = new VitPlus40Ability();
    static readonly VitPlus60: Ability = new VitPlus60Ability();
    static readonly MagPlus20: Ability = new MagPlus20Ability();
    static readonly MagPlus40: Ability = new MagPlus40Ability();
    static readonly MagPlus60: Ability = new MagPlus60Ability();
    static readonly SprPlus20: Ability = new SprPlus20Ability();
    static readonly SprPlus40: Ability = new SprPlus40Ability();
    static readonly SprPlus60: Ability = new SprPlus60Ability();
    static readonly SpdPlus20: Ability = new SpdPlus20Ability();
    static readonly SpdPlus40: Ability = new SpdPlus40Ability();
    static readonly EvaPlus30: Ability = new EvaPlus30Ability();
    static readonly LuckPlus50: Ability = new LuckPlus50Ability();
    static readonly Mug: Ability = new MugAbility();
    static readonly MedData: Ability = new MedDataAbility();
    static readonly Counter: Ability = new CounterAbility();
    static readonly ReturnDamage: Ability = new ReturnDamageAbility();
    static readonly Cover: Ability = new CoverAbility();
    static readonly Initiative: Ability = new InitiativeAbility();
    static readonly MoveHpUp: Ability = new MoveHpUpAbility();
    static readonly HpBonus: Ability = new HpBonusAbility();
    static readonly StrBonus: Ability = new StrBonusAbility();
    static readonly VitBonus: Ability = new VitBonusAbility();
    static readonly MagBonus: Ability = new MagBonusAbility();
    static readonly SprBonus: Ability = new SprBonusAbility();
    static readonly AutoProtect: Ability = new AutoProtectAbility();
    static readonly AutoShell: Ability = new AutoShellAbility();
    static readonly AutoReflect: Ability = new AutoReflectAbility();
    static readonly AutoHaste: Ability = new AutoHasteAbility();
    static readonly AutoPotion: Ability = new AutoPotionAbility();
    static readonly ExpendX2: Ability = new ExpendX2Ability();
    static readonly ExpendX3: Ability = new ExpendX3Ability();
    static readonly Ribbon: Ability = new RibbonAbility();
}
