import {VSCodeDivider} from '../index';

export type DividerArgs = {
	role: string;
};

export function createDivider({role}: DividerArgs) {
	const divider = new VSCodeDivider();

	if (role && role.toLocaleLowerCase() === 'presentation') {
		divider.setAttribute('role', role.toLocaleLowerCase());
	}

	return divider;
}
