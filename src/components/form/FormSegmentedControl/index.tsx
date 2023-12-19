import SegmentedControl, {
	SegmentedControlOption,
} from "@/designSystem/SegmentedControl";
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
	 * onChange
	 */
	onChange?: (opt: SegmentedControlOption) => void;
	/**
	 * input
	 */
	input?: FieldInputProps<T, HTMLElement>;
}

const FormSegmentedControl = ({
	width,
	data,
	input,
	onChange,
}: SegmentedControlProps<any>) => {
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
						onChange?.(opt);
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

export default FormSegmentedControl;
