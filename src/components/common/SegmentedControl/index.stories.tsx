import _ from "lodash";
import { useState } from "react";
import SegmentedControl, { SegmentedControlOption } from ".";

export default {
	component: SegmentedControl,
	title: "Segmented Control",
	tags: ["autodocs"],
};

const defaultOptions: SegmentedControlOption[] = [
	{ id: "opt1", value: "1", isActive: false },
	{ id: "opt2", value: "2", isActive: false },
	{ id: "opt3", value: "3", isActive: false },
];

// Segmented Control
export const Default = () => {
	const [options, setOptions] = useState(defaultOptions);
	return (
		<SegmentedControl
			options={options}
			onchange={(option, i) => {
				const clonedOptions = _.cloneDeep(options);
				clonedOptions.map((opt, x) => {
					if (x === i) {
						opt.isActive = true;
						return opt;
					}
					opt.isActive = false;
					return opt;
				});
				setOptions(clonedOptions);
			}}
		/>
	);
};
