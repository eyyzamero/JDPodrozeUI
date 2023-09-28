import { IExcursionsGetItemImageRes } from '../../..';

export interface IExcursionsGetItemRes {
	id: number;
	title: string;
	shortDescription: string;
	description: string;
	active: boolean;
	inCarousel: boolean;
	dateFrom?: Date;
	dateTo?: Date;
	price: number;
	discount: boolean;
	discountPrice: number;
	images: IExcursionsGetItemImageRes[];
}