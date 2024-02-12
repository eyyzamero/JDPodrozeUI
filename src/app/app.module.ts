import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './core/interceptor/request.interceptor';

import { registerLocaleData } from '@angular/common';

import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptor,
			multi: true
		},
		{
			provide: LOCALE_ID,
			useValue: "pl"
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }