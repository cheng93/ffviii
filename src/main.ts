import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environment/environment';
import { enableProdMode } from '@angular/core';

if (!environment.isDevelopment) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
