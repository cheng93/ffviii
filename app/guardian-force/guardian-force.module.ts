import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AbilitiesComponent } from './components/abilities.component';
import { CharacterComponent } from './components/character.component';
import { GuardianForceComponent } from './components/guardian-force.component';
import { MenuItemComponent } from './components/menu-item.component';
import { CharacterSectionComponent } from './containers/character-section.component';
import { GuardianForceSectionComponent } from './containers/guardian-force-section.component';
import { MenuSectionComponent } from './containers/menu-section.component';
import { GuardianForcePage } from './pages/guardian-force.page';
import { reducers } from './reducers';
import { guardianForceRoutes } from './guardian-force.routes';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('guardianForce', reducers),
        RouterModule.forChild(guardianForceRoutes)
    ],
    declarations: [
        AbilitiesComponent,
        CharacterComponent,
        CharacterSectionComponent,
        GuardianForceComponent,
        GuardianForcePage,
        GuardianForceSectionComponent,
        MenuItemComponent,
        MenuSectionComponent
    ],
    exports: [GuardianForcePage]
})
export class GuardianForceModule {}
