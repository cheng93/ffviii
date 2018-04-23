import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GuardianForce, AllGuardianForces } from '../models/guardian-forces';

@Injectable()
export class GuardianForceService {
    getAll(): Observable<GuardianForce[]> {
        return of(
            Object.keys(AllGuardianForces).map(x => AllGuardianForces[x])
        );
    }
}
