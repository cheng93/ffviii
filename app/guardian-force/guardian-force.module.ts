import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AbilitiesComponent } from './components/abilities.component';
import { CharacterComponent } from './components/character.component';
import { GuardianForceComponent } from './components/guardian-force.component';
import { CharacterSectionComponent } from './containers/character-section.component';
import { GuardianForceSectionComponent } from './containers/guardian-force-section.component';
import { MenuItemComponent } from './components/menu-item.component';
import { MenuSectionComponent } from './containers/menu-section.component';
import { reducers } from './reducers';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('guardianForce', reducers)],
    declarations: [
        AbilitiesComponent,
        CharacterComponent,
        CharacterSectionComponent,
        GuardianForceComponent,
        GuardianForceSectionComponent,
        MenuItemComponent,
        MenuSectionComponent
    ],
    exports: [
        CharacterSectionComponent,
        GuardianForceSectionComponent,
        MenuSectionComponent
    ]
})
export class GuardianForceModule {}
