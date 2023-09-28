import { IExcursionsEditImageReq, IExcursionsEditReq } from '../../..';

export class ExcursionsEditReq implements IExcursionsEditReq {

	constructor(
		public id: number = 0,
		public title: string = '',
		public shortDescription: string = '',
		public description: string = '',
		public active: boolean = false,
		public inCarousel: boolean = false,
		public price: number = 0,
		public discount: boolean = false,
		public discountPrice: number = 0,
		public dateFrom?: string,
		public dateTo?: string,
		public images: IExcursionsEditImageReq[] = []
	) { }
}