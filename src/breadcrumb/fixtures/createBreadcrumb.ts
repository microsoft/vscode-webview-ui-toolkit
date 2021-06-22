// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeBreadcrumb} from '../index';
import {createBreadcrumbItem} from '../../breadcrumb-item/fixtures/createBreadcrumbItem';

export type BreadcrumbArgs = {
	breadcrumbItemList: string[];
	startIcon: boolean;
	separatorIcon: boolean;
	endIcon: boolean;
};

export function createBreadcrumb({
	breadcrumbItemList,
	startIcon,
	separatorIcon,
	endIcon,
}: BreadcrumbArgs) {
	const breadcrumb = new VSCodeBreadcrumb();

	for (let i = 0; i < breadcrumbItemList.length; i++) {
		const breadcrumbItem = createBreadcrumbItem({
			label: breadcrumbItemList[i],
			href: '#',
			startIcon,
			separatorIcon,
			endIcon,
			isFocused: false,
		});
		breadcrumb.appendChild(breadcrumbItem);
	}

	return breadcrumb;
}
