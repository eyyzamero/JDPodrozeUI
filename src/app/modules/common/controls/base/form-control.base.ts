import { AfterContentInit, ChangeDetectorRef, ContentChildren, Directive, Input, OnDestroy, QueryList } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormControlErrorDirective } from "../directives";
import { Subscription } from "rxjs";

@Directive()
export class FormControlBase<TType> implements AfterContentInit, OnDestroy {

    @ContentChildren(FormControlErrorDirective) private _errorRefs?: QueryList<FormControlErrorDirective>;

    @Input() control: FormControl<TType | null> = new FormControl<TType | null>(null);
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() id?: string;
    @Input() autocomplete?: string; 

    get isInvalid(): boolean {
        const result = this.control.errors && this.control.touched;
        return result ?? false;
    }

    errorMessages: string[] = [];

    private _errorRefsChangesSubscription?: Subscription;

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) { }

    ngAfterContentInit(): void {
        this._errorRefsChangesSubscription = this._errorRefs?.changes.subscribe({
            next: () => {
                this._refreshErrorMessages();
                this._changeDetectorRef.markForCheck();
            }
        });
        this._refreshErrorMessages();
    }

    private _refreshErrorMessages(): void {
        const newErrorTexts = this._errorRefs?.map(error => error.content);
        
        if (newErrorTexts && !this.arrayEquals(newErrorTexts, this.errorMessages)) {
            this.errorMessages = newErrorTexts;
            this._changeDetectorRef.markForCheck();
        }
    }

    private arrayEquals(a: any[], b: any[]): boolean {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }

    ngOnDestroy(): void {
        this._errorRefsChangesSubscription?.unsubscribe();
    }
}