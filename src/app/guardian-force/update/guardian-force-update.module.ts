import { NgModule } from '@angular/core';
import { AbilityComponent } from './components';
import {
    AbilitiesSectionComponent,
    ResetComponent
} from './containers';
import { GuardianForceUpdatePage } from './guardian-force-update.page';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
        AbilitiesSectionComponent,
        AbilityComponent,
        ResetComponent,
        GuardianForceUpdatePage
    ],
    exports: [GuardianForceUpdatePage]
})
export class GuardianForceUpdateModule {}
