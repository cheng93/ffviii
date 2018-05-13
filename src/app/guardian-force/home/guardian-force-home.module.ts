import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuardianForceCoreModule } from '../core/guardian-force-core.module';
import {
    AbilitiesComponent,
    CharacterComponent,
    GuardianForceComponent,
    MenuItemComponent
} from './components';
import {
    CharacterSectionComponent,
    CharacterSectionService,
    GuardianForceSectionComponent,
    MenuSectionComponent,
    MenuSectionService
} from './containers';
import { GuardianForceHomePage } from './guardian-force-home.page';

@NgModule({
    imports: [CommonModule, RouterModule, GuardianForceCoreModule],
    declarations: [
        AbilitiesComponent,
        CharacterComponent,
        CharacterSectionComponent,
        GuardianForceComponent,
        GuardianForceHomePage,
        GuardianForceSectionComponent,
        MenuItemComponent,
        MenuSectionComponent
    ],
    providers: [CharacterSectionService, MenuSectionService],
    exports: [GuardianForceHomePage]
})
export class GuardianForceHomeModule {}
