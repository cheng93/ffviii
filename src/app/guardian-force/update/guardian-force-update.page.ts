import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './guardian-force-update.template.html',
    styleUrls: ['./guardian-force-update.style.scss']
})
export class GuardianForceUpdatePage {
    constructor(private route: ActivatedRoute) {
        this.guardianForce$ = this.route.paramMap.pipe(
            map((params: ParamMap) => params.get('gf') as string)
        );
    }

    guardianForce$: Observable<string>;
}
