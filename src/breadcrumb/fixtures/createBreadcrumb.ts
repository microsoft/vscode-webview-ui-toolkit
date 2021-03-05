import {VSCodeBreadcrumb} from '../index';
import {VSCodeBreadcrumbItem} from '../../breadcrumb-item/index';

export type BreadcrumbArgs = {
	numberOfChildren: number;
};

export function createBreadcrumb({numberOfChildren}: BreadcrumbArgs) {
	const breadcrumb = createBreadcrumbWithNChildren(numberOfChildren);

	return breadcrumb;
}

function createBreadcrumbWithNChildren(numberOfChildren: number) {
	const breadcrumb = new VSCodeBreadcrumb();

	for (let i = 0; i < numberOfChildren; i++) {
		const breadcrumbItem = new VSCodeBreadcrumbItem();
		breadcrumbItem.textContent =
			i !== numberOfChildren - 1 ? 'directory' : 'file';
		breadcrumbItem.setAttribute('href', '#');
		breadcrumb.appendChild(breadcrumbItem);
	}

	return breadcrumb;
}
