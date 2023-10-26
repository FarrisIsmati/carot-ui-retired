import SegmentedControl from "@/components/common/SegmentedControl";
import { spacer320 } from "@/styles/sizes";
import _ from "lodash";
import { useState } from "react";
import LeaseCost from "../../fields/SpaceAndPlace/LeaseCost";
import { leaseOwnValues } from "../../values/segmentedControlValues";

export default () => {
	const [options, setOptions] = useState(leaseOwnValues);

	return (
		<>
			<SegmentedControl
				options={options}
				width={spacer320}
				onChange={(i) => {
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
			{options[0].isActive && (
				<>
					<LeaseCost />
				</>
			)}
			{options[1].isActive && <p>Own</p>}
		</>
	);
};
