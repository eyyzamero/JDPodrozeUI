import { IExcursionsGetListItemImageRes } from 'src/app/core/contracts';

export interface IExcursionsGetListItemRes {
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
	images: IExcursionsGetListItemImageRes[];
}