import { NgModule } from '@angular/core';
import { AbilityComponent } from './components/ability.component';
import { AbilitiesSectionComponent } from './containers/abilities-section.component';
import { GuardianForceUpdatePage } from './guardian-force-update.page';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
        AbilitiesSectionComponent,
        AbilityComponent,
        GuardianForceUpdatePage
    ],
    exports: [GuardianForceUpdatePage]
})
export class GuardianForceUpdateModule {}
