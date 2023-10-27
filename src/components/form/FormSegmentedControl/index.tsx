import SegmentedControl, {
	SegmentedControlOption,
} from "@/components/common/SegmentedControl";
import _ from "lodash";
import { useState } from "react";
import { FieldInputProps } from "react-final-form";

export interface SegmentedControlProps<T> {
	/**
	 * Custom width of segmented control as a string (e.g. '320px')
	 */
	width?: string;
	/**
	 * Custom data, make sure id matches up with field data type
	 */
	data: SegmentedControlOption[];
	/**
	 * input
	 */
	input?: FieldInputProps<T, HTMLElement>;
}

export default ({ width, data, input }: SegmentedControlProps<any>) => {
	const [options, setOptions] = useState(data);

	return (
		<SegmentedControl
			options={options}
			width={width}
			onChange={(i) => {
				const clonedOptions = _.cloneDeep(options);
				clonedOptions.map((opt, x) => {
					if (x === i) {
						opt.isActive = true;
						input?.onChange?.(opt.id);
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
