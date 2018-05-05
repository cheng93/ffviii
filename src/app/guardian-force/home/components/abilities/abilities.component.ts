import { Component, Input } from '@angular/core';

@Component({
    selector: 'abilities',
    templateUrl: './abilities.template.html',
    styleUrls: ['./abilities.style.scss']
})
export class AbilitiesComponent {
    @Input() title!: string;

    @Input() abilities!: string[];

    @Input() allAbilities!: string[];

    get filtered(): string[] {
        let all = new Set(this.allAbilities);
        let a = new Set(this.abilities);
        return [...all].filter(x => a.has(x));
    }
}
