import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CharacterComponent } from './components/character.component';
import { GuardianForceComponent } from './components/guardian-force.component';
import { CharacterSectionComponent } from './containers/character-section.component';
import { GuardianForceSectionComponent } from './containers/guardian-force-section.component';
import { reducers } from './reducers';

let COMPONENTS = [
    CharacterComponent,
    CharacterSectionComponent,
    GuardianForceComponent,
    GuardianForceSectionComponent
];

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('guardianForce', reducers)],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class GuardianForceModule {}
