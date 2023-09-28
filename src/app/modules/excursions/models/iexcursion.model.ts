import { IExcursionImageModel } from '.';

export interface IExcursionModel {
	id: number;
	title: string;
	shortDescription: string;
	description: string;
	active: boolean;
	inCarousel: boolean;
	dateFrom?: Date;
	dateTo?: Date;
	priceGross: number;
	priceNet: number;
	discount: boolean;
	discountPrice: number;
	imageId: number;
	images: IExcursionImageModel[];
}