import { Ability } from './ability';

export class BoostAbility implements Ability {
    readonly ap: number | null = 10;
    readonly description: string = "Increases a GF's attack power using timed presses";
    readonly name: string = 'Boost';
}

export class GfHpPlus10Ability implements Ability {
    readonly ap: number | null = 40;
    readonly description: string = "Increases a GF's maximum HP by 10%";
    readonly name: string = 'GFHP+10%';
}

export class GfHpPlus20Ability implements Ability {
    readonly ap: number | null = 70;
    readonly description: string = "Increases a GF's maximum HP by 20%";
    readonly name: string = 'GFHP+20%';
}

export class GfHpPlus30Ability implements Ability {
    readonly ap: number | null = 140;
    readonly description: string = "Increases a GF's maximum HP by 30%";
    readonly name: string = 'GFHP+30%';
}

export class GfHpPlus40Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = "Increases a GF's maximum HP by 40%";
    readonly name: string = 'GFHP+40%';
}

export class SumMagPlus10Ability implements Ability {
    readonly ap: number | null = 40;
    readonly description: string = "Increases a GF's attack power by 10%";
    readonly name: string = 'SumMag+10%';
}

export class SumMagPlus20Ability implements Ability {
    readonly ap: number | null = 70;
    readonly description: string = "Increases a GF's attack power by 20%";
    readonly name: string = 'SumMag+20%';
}

export class SumMagPlus30Ability implements Ability {
    readonly ap: number | null = 140;
    readonly description: string = "Increases a GF's attack power by 30%";
    readonly name: string = 'SumMag+30%';
}

export class SumMagPlus40Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = "Increases a GF's attack power by 40%";
    readonly name: string = 'SumMag+40%';
}

export class GuardianForceAbilities {
    static readonly Boost: Ability = new BoostAbility();
    static readonly GfHpPlus10: Ability = new GfHpPlus10Ability();
    static readonly GfHpPlus20: Ability = new GfHpPlus20Ability();
    static readonly GfHpPlus30: Ability = new GfHpPlus30Ability();
    static readonly GfHpPlus40: Ability = new GfHpPlus40Ability();
    static readonly SumMagPlus10: Ability = new SumMagPlus10Ability();
    static readonly SumMagPlus20: Ability = new SumMagPlus20Ability();
    static readonly SumMagPlus30: Ability = new SumMagPlus30Ability();
    static readonly SumMagPlus40: Ability = new GfHpPlus40Ability();
}
