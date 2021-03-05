import {VSCodeBreadcrumbItem} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type BreadcrumbItemArgs = {
	label?: string;
	href?: string;
	isFocused: boolean;
};

export function createBreadcrumbItem({
	label,
	href,
	isFocused,
}: BreadcrumbItemArgs) {
	const breadcrumbItem = new VSCodeBreadcrumbItem();

	if (label) {
		breadcrumbItem.textContent = label;
	}
	if (isFocused) {
		focusObserver(breadcrumbItem);
	}
	breadcrumbItem.setAttribute('href', href);

	return breadcrumbItem;
}
