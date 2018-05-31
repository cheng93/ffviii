import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuAbilities } from '../../../../models/abilities';
import { MenuSectionService } from './menu-section.service';

@Component({
    selector: 'menu-section',
    templateUrl: './menu-section.template.html',
    styleUrls: ['./menu-section.style.scss']
})
export class MenuSectionComponent {
    constructor(private menuSectionService: MenuSectionService) {
        this.abilities$ = menuSectionService.getMenuAbilities();
    }

    abilities$: Observable<string[]>;

    menuAbilities: string[] = Object.values(MenuAbilities).map(x => x.name);
}
