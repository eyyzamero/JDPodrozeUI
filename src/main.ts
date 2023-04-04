import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { configuration } from './configurations/configuration';

import { AppModule } from './app/app.module';

if (configuration.production) {
	enableProdMode();

	if (window)
		window.console.log = () => { };
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));