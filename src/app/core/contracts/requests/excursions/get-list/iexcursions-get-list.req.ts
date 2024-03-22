import { AdminExcursionsSortType } from "src/app/modules/admin/components/excursions/enums";

export interface IExcursionsGetListReq {
	sort: AdminExcursionsSortType;
	active: boolean | null;
}