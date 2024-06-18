import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: 'form-control-error',
    standalone: true
})
export class FormControlErrorDirective implements OnInit {

    content: string = '';

    constructor(
        private readonly _elementRef: ElementRef<HTMLElement>
    ) { }
    
    ngOnInit(): void {
        this.content = this._elementRef.nativeElement.textContent?.trim() || '';
    }
}