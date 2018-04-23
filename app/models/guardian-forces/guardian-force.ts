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

class _AllGuardianForces {
    [key: string]: GuardianForce;
    readonly Quezacotl: GuardianForce = new QuezacotlGuardianForce();
    readonly Shiva: GuardianForce = new ShivaGuardianForce();
    readonly Ifrit: GuardianForce = new IfritGuardianForce();
    readonly Siren: GuardianForce = new SirenGuardianForce();
    readonly Brothers: GuardianForce = new BrothersGuardianForce();
    readonly Diablos: GuardianForce = new DiablosGuardianForce();
    readonly Carbuncle: GuardianForce = new CarbuncleGuardianForce();
    readonly Leviathan: GuardianForce = new LeviathanGuardianForce();
    readonly Pandemona: GuardianForce = new PandemonaGuardianForce();
    readonly Cerberus: GuardianForce = new CerberusGuardianForce();
    readonly Alexander: GuardianForce = new AlexanderGuardianForce();
    readonly Doomtrain: GuardianForce = new DoomtrainGuardianForce();
    readonly Bahamut: GuardianForce = new BahamutGuardianForce();
    readonly Cactuar: GuardianForce = new CactuarGuardianForce();
    readonly Tonberry: GuardianForce = new TonberryGuardianForce();
    readonly Eden: GuardianForce = new EdenGuardianForce();
}

export const AllGuardianForces = new _AllGuardianForces();
