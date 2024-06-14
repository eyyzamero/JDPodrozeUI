import { IExcursionsAddImageReq, IExcursionsAddPickupPointReq } from '../../..';

export interface IExcursionsAddReq {
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
	images: IExcursionsAddImageReq[];
    pickupPoints: IExcursionsAddPickupPointReq[];
}