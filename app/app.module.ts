import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/core.module';
import { GuardianForceModule } from './guardian-force/guardian-force.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './app.reducers';
import './app.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            name: 'NgRx Book Store DevTools'
        }),
        CoreModule,
        GuardianForceModule,
        RouterModule.forRoot([], { useHash: true })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
