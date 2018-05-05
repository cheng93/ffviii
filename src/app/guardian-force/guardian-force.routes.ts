import { Route } from '@angular/router';
import { GuardianForceHomePage } from './home/guardian-force-home.page';
import { GuardianForceUpdatePage } from './update/guardian-force-update.page';

export const guardianForceRoutes: Route[] = [
    {
        component: GuardianForceUpdatePage,
        path: ':gf'
    },
    {
        component: GuardianForceHomePage,
        path: ''
    }
];
