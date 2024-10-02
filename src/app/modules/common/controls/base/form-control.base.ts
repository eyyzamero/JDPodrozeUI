import { AfterContentInit, ChangeDetectorRef, ContentChildren, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormControlErrorDirective } from "../directives";
import { debounceTime, Subscription } from "rxjs";

@Directive()
export class FormControlBase<TType> implements AfterContentInit, OnInit, OnDestroy {

    @ContentChildren(FormControlErrorDirective) private _errorRefs?: QueryList<FormControlErrorDirective>;

    @Input() control: FormControl<TType | null> = new FormControl<TType | null>(null);
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() id?: string;
    @Input() autocomplete?: string; 
    @Input() debounceTime: number = 0;

    @Output() valueChanged: EventEmitter<TType | null> = new EventEmitter<TType | null>();

    get isInvalid(): boolean {
        const result = this.control.errors && this.control.touched;
        return result ?? false;
    }

    errorMessages: string[] = [];

    private _valueChangesSubscription?: Subscription;
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

    ngOnInit(): void {
        this._valueChangesSubscription = this.control.valueChanges.pipe(
            debounceTime(this.debounceTime)
        ).subscribe({
            next: (value) => this.valueChanged.emit(value)
        });
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
        this._valueChangesSubscription?.unsubscribe();
    }
}