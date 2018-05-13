import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AbilityEffects } from './effects/ability';
import { reducers } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('guardianForce', reducers),
        EffectsModule.forFeature([AbilityEffects])
    ]
})
export class GuardianForceCoreModule {}
