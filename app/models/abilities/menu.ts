import { Ability } from './ability';

export class HaggleAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Receive discounts at shops';
    readonly name: string = 'Haggle';
}

export class SellHighAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Sell high at shops';
    readonly name: string = 'Sell-High';
}

export class FamiliarAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Easier to buy rare items';
    readonly name: string = 'Familiar';
}

export class CallShopAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Call shops from menu screen';
    readonly name: string = 'CallShop';
}

export class JunkShopAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Call junk shop from menu screen';
    readonly name: string = 'Junk Shop';
}

export class TMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Lightning/Wind Magic from an item';
    readonly name: string = 'T Mag-RF';
}

export class IMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Water/Ice Magic from an item';
    readonly name: string = 'I Mag-RF';
}

export class FMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Fire Magic from an item';
    readonly name: string = 'F Mag-RF';
}

export class LMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Life/Recovery Magic from an item';
    readonly name: string = 'L Mag-RF';
}

export class TimeMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Time/Space Magic from an item';
    readonly name: string = 'Time Mag-RF';
}

export class StMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine status Magic from an item';
    readonly name: string = 'ST Mag-RF';
}

export class SuptMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Support Magic from an item';
    readonly name: string = 'Supt Mag-RF';
}

export class ForbidMagRfAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Refine Forbidden Magic from an item';
    readonly name: string = 'Forbid Mag-RF';
}

export class RecovMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Recovery Medicine from an item';
    readonly name: string = 'Recov Med-RF';
}

export class StMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine status Recovery Medicine from an item';
    readonly name: string = 'ST Med-RF';
}

export class AmmoRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Ammunition from an item';
    readonly name: string = 'Ammo-RF';
}

export class ToolRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Tools from an item';
    readonly name: string = 'Tool-RF';
}

export class ForbidMedRfAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Refine Forbidden Medicine from an item';
    readonly name: string = 'Forbid Med-RF';
}

export class GfRecovMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Recovery Medicine for GF from an item';
    readonly name: string = 'GFRecov Med-RF';
}

export class GfAblMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine ability learning medicine for GF from items';
    readonly name: string = 'GFAbl Med-RF';
}

export class MidMagRfAbility implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Refine Mid-Level Magic from other Magic';
    readonly name: string = 'Mid Mag-RF';
}

export class HighMagRfAbility implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Refine High-Level Magic from other Magic';
    readonly name: string = 'High Mag-RF';
}

export class MedLvUpAbility implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Levels up medicine';
    readonly name: string = 'Med LV Up';
}

export class CardModAbility implements Ability {
    readonly ap: number | null = 80;
    readonly description: string = 'Refine items from cards';
    readonly name: string = 'Card Mod';
}

export class MenuAbilities {
    static readonly Haggle: Ability = new HaggleAbility();
    static readonly SellHigh: Ability = new SellHighAbility();
    static readonly Familiar: Ability = new FamiliarAbility();
    static readonly CallShop: Ability = new CallShopAbility();
    static readonly JunkShop: Ability = new JunkShopAbility();
    static readonly TMagRf: Ability = new TMagRfAbility();
    static readonly IMagRf: Ability = new IMagRfAbility();
    static readonly FMagRf: Ability = new FMagRfAbility();
    static readonly LMagRf: Ability = new LMagRfAbility();
    static readonly TimeMagRf: Ability = new TimeMagRfAbility();
    static readonly StMagRf: Ability = new StMagRfAbility();
    static readonly SuptMagRf: Ability = new SuptMagRfAbility();
    static readonly ForbidMagRf: Ability = new ForbidMagRfAbility();
    static readonly RecovMedRf: Ability = new RecovMedRfAbility();
    static readonly StMedRf: Ability = new StMedRfAbility();
    static readonly AmmoRf: Ability = new AmmoRfAbility();
    static readonly ToolRf: Ability = new ToolRfAbility();
    static readonly ForbidMedRf: Ability = new ForbidMedRfAbility();
    static readonly GfRecovMedRf: Ability = new GfRecovMedRfAbility();
    static readonly GfAblMedRf: Ability = new GfAblMedRfAbility();
    static readonly MidMagRf: Ability = new MidMagRfAbility();
    static readonly HighMagRf: Ability = new HighMagRfAbility();
    static readonly MedLvUp: Ability = new MedLvUpAbility();
    static readonly CardMod: Ability = new CardModAbility();
}
