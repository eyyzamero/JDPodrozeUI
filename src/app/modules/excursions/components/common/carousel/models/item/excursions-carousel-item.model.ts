import { IExcursionsCarouselItemModel } from '..';

export class ExcursionsCarouselItemModel implements IExcursionsCarouselItemModel {

	constructor(
		public id: number = 0,
        public excursionId: number = 0,
		public title: string = '',
		public description: string = '',
		public loaded: boolean = false
	) { }
}