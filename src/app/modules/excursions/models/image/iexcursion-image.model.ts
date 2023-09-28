export interface IExcursionImageModel {
	id: number;
	excursionId: number;
	order: number;
	name: string;
	type: string;
	base64: string;
	deleted: boolean;
}