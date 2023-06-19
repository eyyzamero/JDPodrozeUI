import { inject } from '@angular/core';
import { RoleType } from '../enums';
import { AuthDataService } from '../services/data/auth/auth-data.service';

export const roleGuard = (allowedRoles: RoleType[]) => {
	const authDataService = inject(AuthDataService);
	
	return authDataService.currentValue.data !== undefined
		&& authDataService.currentValue.data !== null
		&& allowedRoles.includes(authDataService.currentValue.data.role); 
}