import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GuardianForceCoreModule } from '../core/guardian-force-core.module';
import { AbilitiesComponent } from './components/abilities.component';
import { CharacterComponent } from './components/character.component';
import { GuardianForceComponent } from './components/guardian-force.component';
import { MenuItemComponent } from './components/menu-item.component';
import { CharacterSectionComponent } from './containers/character-section.component';
import { GuardianForceSectionComponent } from './containers/guardian-force-section.component';
import { MenuSectionComponent } from './containers/menu-section.component';
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
    exports: [GuardianForceHomePage]
})
export class GuardianForceHomeModule {}
