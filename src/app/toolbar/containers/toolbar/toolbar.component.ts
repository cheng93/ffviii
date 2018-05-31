import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromToolbar from '../../reducers';
import { Observable } from 'rxjs';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.scss']
})
export class ToolbarComponent {
    constructor(
        private router: Router,
        private store: Store<fromToolbar.State>
    ) {
        this.showBack$ = store.pipe(select(fromToolbar.getBackShowBack));
    }

    @Input() title!: string;

    showBack$: Observable<boolean>;

    onBack(): void {
        this.router.navigate(['/']);
    }
}
