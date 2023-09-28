import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLogoComponent } from './components/logo/footer-logo.component';
import { FooterSocialsComponent } from './components/socials/footer-socials.component';
import { FooterVersionAndCopyrightComponent } from './components/version-and-copyright/footer-version-and-copyright.component';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		FooterLogoComponent,
		FooterSocialsComponent,
		FooterVersionAndCopyrightComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		FooterComponent
	]
})
export class FooterModule { }