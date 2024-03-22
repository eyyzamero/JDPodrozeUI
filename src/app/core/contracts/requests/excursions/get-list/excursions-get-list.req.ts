import { AdminExcursionsSortType } from "src/app/modules/admin/components/excursions/enums";
import { IExcursionsGetListReq } from "../../..";

export class ExcursionsGetListReq implements IExcursionsGetListReq {

	constructor(
		public sort: AdminExcursionsSortType = AdminExcursionsSortType.DATE_FROM,
		public active: boolean | null = null
	) { }
}