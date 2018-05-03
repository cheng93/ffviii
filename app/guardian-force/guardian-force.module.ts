import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { guardianForceRoutes } from './guardian-force.routes';
import { GuardianForceHomeModule } from './home/guardian-force-home.module';
import { GuardianForceUpdateModule } from './update/guardian-force-update.module';

@NgModule({
    imports: [
        CommonModule,
        GuardianForceHomeModule,
        GuardianForceUpdateModule,
        RouterModule.forChild(guardianForceRoutes)
    ]
})
export class GuardianForceModule {}
