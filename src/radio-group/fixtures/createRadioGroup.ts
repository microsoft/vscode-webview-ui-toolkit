import {VSCodeRadioGroup} from '../index';
import {VSCodeRadio} from '../../radio/index';

export type RadioGroupArgs = {
	label?: string;
	orientation: string;
	numberOfChildren: number;
};

export function createRadioGroup({
	label,
	orientation,
	numberOfChildren,
}: RadioGroupArgs) {
	const radioGroup = createRadioGroupWithNChildren(numberOfChildren);

	if (label) {
		const labelElement = document.createElement('label');
		labelElement.setAttribute('slot', 'label');
		labelElement.textContent = label;
		radioGroup.prepend(labelElement);
	}
	radioGroup.setAttribute('orientation', orientation.toLowerCase());

	return radioGroup;
}

function createRadioGroupWithNChildren(numberOfChildren: number) {
	const radioGroup = new VSCodeRadioGroup();

	for (let i = 0; i < numberOfChildren; i++) {
		const radio = new VSCodeRadio();
		radio.textContent = 'Radio Label';
		radioGroup.appendChild(radio);
	}

	return radioGroup;
}
