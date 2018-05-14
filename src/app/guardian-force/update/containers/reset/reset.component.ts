import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAbilities } from '../../../core/actions/ability';
import * as fromGuardianForce from '../../../core/reducers';

@Component({
    selector: 'reset',
    templateUrl: './reset.template.html',
    styleUrls: ['./reset.style.scss']
})
export class ResetComponent {
    constructor(private store: Store<fromGuardianForce.State>) {}

    @Input() guardianForce!: string;

    onClick(): void {
        const action: ResetAbilities = new ResetAbilities(this.guardianForce);
        this.store.dispatch(action);
    }
}
