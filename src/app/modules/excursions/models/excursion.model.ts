import { IExcursionImageModel, IExcursionModel } from '.';

export class ExcursionModel implements IExcursionModel {

	constructor(
		public id: number = 0,
		public title: string = '',
		public shortDescription: string = '',
		public description: string = '',
		public active: boolean = false,
		public inCarousel: boolean = false,
		public dateFrom?: Date,
		public dateTo?: Date,
		public priceGross: number = 0,
		public priceNet: number = 0,
		public discount: boolean = false,
		public discountPrice: number = 0,
		public imageId: number = 0,
		public images: IExcursionImageModel[] = []
	) { }
}