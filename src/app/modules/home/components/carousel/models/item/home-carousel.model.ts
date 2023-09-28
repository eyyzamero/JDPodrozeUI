import { IHomeCarouselModel } from '..';

export class HomeCarouselModel implements IHomeCarouselModel {

	constructor(
		public id: number = 0,
		public src: string = '',
		public title: string = ''
	) { }
}