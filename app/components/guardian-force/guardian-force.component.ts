import { Component } from '@angular/core';
import { GuardianForce } from '../../models/guardian-forces';
import { GuardianForceService } from '../../services/guardian-force.service';

@Component({
    selector: 'guardian-force',
    template: require('./guardian-force.template.html')
})
export class GuardianForceComponent {
    constructor(private guardianForceService: GuardianForceService) {
        guardianForceService.getAll().subscribe(x => (this.guardianForces = x));
    }

    guardianForces: GuardianForce[] = [];
}
