import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExcursionsHomeNewsletterModalComponent } from './components/modals/newsletter/excursions-home-newsletter-modal.component';

@Component({
	selector: 'app-excursions-home-newsletter',
	templateUrl: './excursions-home-newsletter.component.html',
	styleUrls: ['./excursions-home-newsletter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExcursionsHomeNewsletterComponent {

	constructor(
        private readonly _ngbModal: NgbModal
	) { }

	enroll(): void {
        this._ngbModal.open(ExcursionsHomeNewsletterModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop'
        });
	}
}