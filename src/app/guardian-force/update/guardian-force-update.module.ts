import { NgModule } from '@angular/core';
import { AbilityComponent } from './components';
import { AbilitiesSectionComponent } from './containers';
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
