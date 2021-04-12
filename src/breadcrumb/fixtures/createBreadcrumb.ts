import {VSCodeBreadcrumb} from '../index';
import {createBreadcrumbItem} from '../../breadcrumb-item/fixtures/createBreadcrumbItem';

export type BreadcrumbArgs = {
	breadcrumbItemList: string[];
	customElement: boolean;
	startIcon: boolean;
	separatorIcon: boolean;
	endIcon: boolean;
};

export function createBreadcrumb({
	breadcrumbItemList,
	customElement,
	startIcon,
	separatorIcon,
	endIcon,
}: BreadcrumbArgs) {
	const breadcrumb = new VSCodeBreadcrumb();

	for (let i = 0; i < breadcrumbItemList.length; i++) {
		const breadcrumbItem = createBreadcrumbItem({
			label: breadcrumbItemList[i],
			href: '#',
			customElement,
			startIcon,
			separatorIcon,
			endIcon,
			isFocused: false,
		});
		breadcrumb.appendChild(breadcrumbItem);
	}

	return breadcrumb;
}
