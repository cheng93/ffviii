import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GuardianForceComponent } from './components/guardian-force/guardian-force.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CharacterService } from './services/character.service';
import { GuardianForceService } from './services/guardian-force.service';
import './app.scss';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, GuardianForceComponent, ToolbarComponent],
    providers: [CharacterService, GuardianForceService],
    bootstrap: [AppComponent]
})
export class AppModule {}
