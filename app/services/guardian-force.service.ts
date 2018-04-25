import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GuardianForce, AllGuardianForces } from '../models/guardian-forces';

@Injectable()
export class GuardianForceService {
    getAll(): BehaviorSubject<GuardianForce[]> {
        return new BehaviorSubject(
            Object.keys(AllGuardianForces).map(x => AllGuardianForces[x])
        );
    }
}
