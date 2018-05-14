import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToolbarModule } from './toolbar/toolbar.module';
import { GuardianForceModule } from './guardian-force/guardian-force.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './app.reducers';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            name: 'NgRx Book Store DevTools'
        }),
        EffectsModule.forRoot([]),
        ToolbarModule,
        GuardianForceModule,
        RouterModule.forRoot([], { useHash: true })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
