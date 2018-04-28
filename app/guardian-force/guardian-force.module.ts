import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AbilitiesComponent } from './components/abilities.component';
import { CharacterComponent } from './components/character.component';
import { GuardianForceComponent } from './components/guardian-force.component';
import { CharacterSectionComponent } from './containers/character-section.component';
import { GuardianForceSectionComponent } from './containers/guardian-force-section.component';
import { reducers } from './reducers';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('guardianForce', reducers)],
    declarations: [
        AbilitiesComponent,
        CharacterComponent,
        CharacterSectionComponent,
        GuardianForceComponent,
        GuardianForceSectionComponent
    ],
    exports: [CharacterSectionComponent, GuardianForceSectionComponent]
})
export class GuardianForceModule {}
