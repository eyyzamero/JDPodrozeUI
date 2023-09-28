import { IExcursionsAddImageReq } from '../../..';

export interface IExcursionsAddReq {
	title: string;
	shortDescription: string;
	description: string;
	active: boolean;
	inCarousel: boolean;
	price: number;
	discount: boolean;
	discountPrice: number;
	dateFrom?: string;
	dateTo?: string;
	images: IExcursionsAddImageReq[];
}