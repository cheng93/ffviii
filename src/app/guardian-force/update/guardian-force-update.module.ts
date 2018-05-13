import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { GuardianForceCoreModule } from '../core/guardian-force-core.module';
import {
    AbilityComponent,
    AbilityFilterComponent,
    AbilityTypeFilterComponent
} from './components';
import {
    AbilitiesSectionComponent,
    AddAbilityComponent,
    AddAbilityService,
    ResetComponent
} from './containers';
import { GuardianForceUpdatePage } from './guardian-force-update.page';

@NgModule({
    imports: [CommonModule, GuardianForceCoreModule],
    declarations: [
        AbilitiesSectionComponent,
        AbilityComponent,
        AbilityFilterComponent,
        AbilityTypeFilterComponent,
        AddAbilityComponent,
        ResetComponent,
        GuardianForceUpdatePage
    ],
    providers: [AddAbilityService],
    exports: [GuardianForceUpdatePage]
})
export class GuardianForceUpdateModule {}
