import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BackComponent } from './components/back/back.component';
import { ToolbarComponent } from './containers/toolbar/toolbar.component';
import { reducers } from './reducers';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('toolbar', reducers)],
    declarations: [BackComponent, ToolbarComponent],
    exports: [ToolbarComponent]
})
export class ToolbarModule {}
