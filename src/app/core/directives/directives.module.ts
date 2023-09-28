import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLazyLoadDirective } from './image-lazy-load/image-lazy-load.directive';

@NgModule({
	declarations: [
		ImageLazyLoadDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		ImageLazyLoadDirective
	]
})
export class DirectivesModule { }