import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ShowBack } from '../../toolbar/actions/back';
import * as fromToolbar from '../../toolbar/reducers';

@Component({
    templateUrl: './guardian-force-update.template.html',
    styleUrls: ['./guardian-force-update.style.scss']
})
export class GuardianForceUpdatePage implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private store: Store<fromToolbar.State>
    ) {}

    ngOnInit(): void {
        this.guardianForce$ = this.route.paramMap.pipe(
            map((params: ParamMap) => params.get('gf') as string)
        );
        this.store.dispatch(new ShowBack());
    }

    guardianForce$!: Observable<string>;
}
