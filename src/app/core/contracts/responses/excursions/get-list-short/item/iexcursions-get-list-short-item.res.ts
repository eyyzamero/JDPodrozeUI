export interface IExcursionsGetListShortItemRes {
	id: number;
	title: string;
	shortDescription: string;
	priceGross: number;
	priceNet: number;
	discount: boolean;
	discountPrice: number;
	dateFrom?: Date;
	dateTo?: Date;
	imageId: number;
	inCarousel: boolean;
}