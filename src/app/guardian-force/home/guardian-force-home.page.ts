import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HideBack } from '../../toolbar/actions/back';
import * as fromToolbar from '../../toolbar/reducers';

@Component({
    templateUrl: './guardian-force-home.template.html',
    styleUrls: ['./guardian-force-home.style.scss']
})
export class GuardianForceHomePage implements OnInit {
    constructor(private store: Store<fromToolbar.State>) {}

    ngOnInit(): void {
        this.store.dispatch(new HideBack());
    }
}
