import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[imageLazyLoad]'
})
export class ImageLazyLoadDirective {

	@Input() lazyLoad: string = '';

	private _intersectionObserver!: IntersectionObserver;

	constructor(
		private _elementRef: ElementRef,
		private _renderer: Renderer2
	) { }

	ngOnInit() {
		this._renderer.removeAttribute(this._elementRef.nativeElement, 'src');
		this._intersectionObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.loadImage();
					this._intersectionObserver.unobserve(this._elementRef.nativeElement);
				}
			});
		});

		this._intersectionObserver.observe(this._elementRef.nativeElement);
	}

	private loadImage() {
		this._renderer.setAttribute(this._elementRef.nativeElement, 'src', this.lazyLoad);
	}
}