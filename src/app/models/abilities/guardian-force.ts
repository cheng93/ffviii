import { Ability, AbilityMap } from './ability';

export class BoostAbility implements Ability {
    readonly ap: number | null = 10;
    readonly description: string = "Increases a GF's attack power using timed presses";
    readonly name: string = 'Boost';
    readonly unique: boolean = true;
}

export class GfHpPlus10Ability implements Ability {
    readonly ap: number | null = 40;
    readonly description: string = "Increases a GF's maximum HP by 10%";
    readonly name: string = 'GFHP+10%';
    readonly unique: boolean = false;
}

export class GfHpPlus20Ability implements Ability {
    readonly ap: number | null = 70;
    readonly description: string = "Increases a GF's maximum HP by 20%";
    readonly name: string = 'GFHP+20%';
    readonly unique: boolean = false;
}

export class GfHpPlus30Ability implements Ability {
    readonly ap: number | null = 140;
    readonly description: string = "Increases a GF's maximum HP by 30%";
    readonly name: string = 'GFHP+30%';
    readonly unique: boolean = false;
}

export class GfHpPlus40Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = "Increases a GF's maximum HP by 40%";
    readonly name: string = 'GFHP+40%';
    readonly unique: boolean = false;
}

export class SumMagPlus10Ability implements Ability {
    readonly ap: number | null = 40;
    readonly description: string = "Increases a GF's attack power by 10%";
    readonly name: string = 'SumMag+10%';
    readonly unique: boolean = false;
}

export class SumMagPlus20Ability implements Ability {
    readonly ap: number | null = 70;
    readonly description: string = "Increases a GF's attack power by 20%";
    readonly name: string = 'SumMag+20%';
    readonly unique: boolean = false;
}

export class SumMagPlus30Ability implements Ability {
    readonly ap: number | null = 140;
    readonly description: string = "Increases a GF's attack power by 30%";
    readonly name: string = 'SumMag+30%';
    readonly unique: boolean = false;
}

export class SumMagPlus40Ability implements Ability {
    readonly ap: number | null = 200;
    readonly description: string = "Increases a GF's attack power by 40%";
    readonly name: string = 'SumMag+40%';
    readonly unique: boolean = false;
}

class _GuardianForceAbilities implements AbilityMap {
    [key: string]: Ability;
    readonly Boost: Ability = new BoostAbility();
    readonly GfHpPlus10: Ability = new GfHpPlus10Ability();
    readonly GfHpPlus20: Ability = new GfHpPlus20Ability();
    readonly GfHpPlus30: Ability = new GfHpPlus30Ability();
    readonly GfHpPlus40: Ability = new GfHpPlus40Ability();
    readonly SumMagPlus10: Ability = new SumMagPlus10Ability();
    readonly SumMagPlus20: Ability = new SumMagPlus20Ability();
    readonly SumMagPlus30: Ability = new SumMagPlus30Ability();
    readonly SumMagPlus40: Ability = new GfHpPlus40Ability();
}

export const GuardianForceAbilities = new _GuardianForceAbilities();
