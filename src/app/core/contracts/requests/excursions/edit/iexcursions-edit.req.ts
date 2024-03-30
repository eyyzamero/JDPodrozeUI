import { IExcursionsEditImageReq } from '../../..';

export interface IExcursionsEditReq {
	id: number;
	title: string;
	shortDescription: string;
	description: string;
	active: boolean;
	inCarousel: boolean;
	price: number;
	discount: boolean;
	discountPrice: number;
    seats: number;
	dateFrom?: string;
	dateTo?: string;
    isTemplate: boolean;
	images: IExcursionsEditImageReq[];
}