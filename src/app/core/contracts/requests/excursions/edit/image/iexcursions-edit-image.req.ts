export interface IExcursionsEditImageReq {
	id: number;
	excursionId: number;
	order: number;
	type: string;
	base64: string;
	name: string;
	deleted: boolean;
}