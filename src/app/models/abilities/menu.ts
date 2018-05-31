import { Ability, AbilityMap } from './ability';

export class HaggleAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Receive discounts at shops';
    readonly name: string = 'Haggle';
    readonly unique: boolean = true;
}

export class SellHighAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Sell high at shops';
    readonly name: string = 'Sell-High';
    readonly unique: boolean = true;
}

export class FamiliarAbility implements Ability {
    readonly ap: number | null = 150;
    readonly description: string = 'Easier to buy rare items';
    readonly name: string = 'Familiar';
    readonly unique: boolean = true;
}

export class CallShopAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Call shops from menu screen';
    readonly name: string = 'Call Shop';
    readonly unique: boolean = true;
}

export class JunkShopAbility implements Ability {
    readonly ap: number | null = null;
    readonly description: string = 'Call junk shop from menu screen';
    readonly name: string = 'Junk Shop';
    readonly unique: boolean = true;
}

export class TMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Lightning/Wind Magic from an item';
    readonly name: string = 'T Mag-RF';
    readonly unique: boolean = true;
}

export class IMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Water/Ice Magic from an item';
    readonly name: string = 'I Mag-RF';
    readonly unique: boolean = true;
}

export class FMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Fire Magic from an item';
    readonly name: string = 'F Mag-RF';
    readonly unique: boolean = true;
}

export class LMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Life/Recovery Magic from an item';
    readonly name: string = 'L Mag-RF';
    readonly unique: boolean = true;
}

export class TimeMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Time/Space Magic from an item';
    readonly name: string = 'Time Mag-RF';
    readonly unique: boolean = true;
}

export class StMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine status Magic from an item';
    readonly name: string = 'ST Mag-RF';
    readonly unique: boolean = true;
}

export class SuptMagRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Support Magic from an item';
    readonly name: string = 'Supt Mag-RF';
    readonly unique: boolean = true;
}

export class ForbidMagRfAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Refine Forbidden Magic from an item';
    readonly name: string = 'Forbid Mag-RF';
    readonly unique: boolean = true;
}

export class RecovMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Recovery Medicine from an item';
    readonly name: string = 'Recov Med-RF';
    readonly unique: boolean = true;
}

export class StMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine status Recovery Medicine from an item';
    readonly name: string = 'ST Med-RF';
    readonly unique: boolean = true;
}

export class AmmoRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Ammunition from an item';
    readonly name: string = 'Ammo-RF';
    readonly unique: boolean = true;
}

export class ToolRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Tools from an item';
    readonly name: string = 'Tool-RF';
    readonly unique: boolean = true;
}

export class ForbidMedRfAbility implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = 'Refine Forbidden Medicine from an item';
    readonly name: string = 'Forbid Med-RF';
    readonly unique: boolean = true;
}

export class GfRecovMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine Recovery Medicine for GF from an item';
    readonly name: string = 'GFRecov Med-RF';
    readonly unique: boolean = true;
}

export class GfAblMedRfAbility implements Ability {
    readonly ap: number | null = 30;
    readonly description: string = 'Refine ability learning medicine for GF from items';
    readonly name: string = 'GFAbl Med-RF';
    readonly unique: boolean = true;
}

export class MidMagRfAbility implements Ability {
    readonly ap: number | null = 60;
    readonly description: string = 'Refine Mid-Level Magic from other Magic';
    readonly name: string = 'Mid Mag-RF';
    readonly unique: boolean = true;
}

export class HighMagRfAbility implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Refine High-Level Magic from other Magic';
    readonly name: string = 'High Mag-RF';
    readonly unique: boolean = true;
}

export class MedLvUpAbility implements Ability {
    readonly ap: number | null = 120;
    readonly description: string = 'Levels up medicine';
    readonly name: string = 'Med LV Up';
    readonly unique: boolean = true;
}

export class CardModAbility implements Ability {
    readonly ap: number | null = 80;
    readonly description: string = 'Refine items from cards';
    readonly name: string = 'Card Mod';
    readonly unique: boolean = true;
}

class _MenuAbilities implements AbilityMap {
    [key: string]: Ability;
    readonly Haggle: Ability = new HaggleAbility();
    readonly SellHigh: Ability = new SellHighAbility();
    readonly Familiar: Ability = new FamiliarAbility();
    readonly CallShop: Ability = new CallShopAbility();
    readonly JunkShop: Ability = new JunkShopAbility();
    readonly TMagRf: Ability = new TMagRfAbility();
    readonly IMagRf: Ability = new IMagRfAbility();
    readonly FMagRf: Ability = new FMagRfAbility();
    readonly LMagRf: Ability = new LMagRfAbility();
    readonly TimeMagRf: Ability = new TimeMagRfAbility();
    readonly StMagRf: Ability = new StMagRfAbility();
    readonly SuptMagRf: Ability = new SuptMagRfAbility();
    readonly ForbidMagRf: Ability = new ForbidMagRfAbility();
    readonly RecovMedRf: Ability = new RecovMedRfAbility();
    readonly StMedRf: Ability = new StMedRfAbility();
    readonly AmmoRf: Ability = new AmmoRfAbility();
    readonly ToolRf: Ability = new ToolRfAbility();
    readonly ForbidMedRf: Ability = new ForbidMedRfAbility();
    readonly GfRecovMedRf: Ability = new GfRecovMedRfAbility();
    readonly GfAblMedRf: Ability = new GfAblMedRfAbility();
    readonly MidMagRf: Ability = new MidMagRfAbility();
    readonly HighMagRf: Ability = new HighMagRfAbility();
    readonly MedLvUp: Ability = new MedLvUpAbility();
    readonly CardMod: Ability = new CardModAbility();
}

export const MenuAbilities = new _MenuAbilities();
