import { Ability } from '../abilities/ability';
import { QuezacotlGuardianForce } from './quezacotl';
import { ShivaGuardianForce } from './shiva';
import { IfritGuardianForce } from './ifrit';
import { SirenGuardianForce } from './siren';
import { BrothersGuardianForce } from './brothers';
import { DiablosGuardianForce } from './diablos';
import { CarbuncleGuardianForce } from './carbuncle';
import { LeviathanGuardianForce } from './leviathan';
import { PandemonaGuardianForce } from './pandemona';
import { CerberusGuardianForce } from './cerberus';
import { AlexanderGuardianForce } from './alexander';
import { DoomtrainGuardianForce } from './doomtrain';
import { BahamutGuardianForce } from './bahamut';
import { CactuarGuardianForce } from './cactuar';
import { TonberryGuardianForce } from './tonberry';
import { EdenGuardianForce } from './eden';

export interface GuardianForce {
    abilities: Ability[];
    defaultAbilities: Ability[];
    name: string;
}

export class AllGuardianForces {
    static readonly Quezacotl = new QuezacotlGuardianForce();
    static readonly Shiva = new ShivaGuardianForce();
    static readonly Ifrit = new IfritGuardianForce();
    static readonly Siren = new SirenGuardianForce();
    static readonly Brothers = new BrothersGuardianForce();
    static readonly Diablos = new DiablosGuardianForce();
    static readonly Carbuncle = new CarbuncleGuardianForce();
    static readonly Leviathan = new LeviathanGuardianForce();
    static readonly Pandemona = new PandemonaGuardianForce();
    static readonly Cerberus = new CerberusGuardianForce();
    static readonly Alexander = new AlexanderGuardianForce();
    static readonly Doomtrain = new DoomtrainGuardianForce();
    static readonly Bahamut = new BahamutGuardianForce();
    static readonly Cactuar = new CactuarGuardianForce();
    static readonly Tonberry = new TonberryGuardianForce();
    static readonly Eden = new EdenGuardianForce();
}
