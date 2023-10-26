import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer320, spacer40, spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import SegmentedControl from "@/components/common/SegmentedControl";
import { LocationType } from "@/types/VisionForm/SpaceAndPlaceSection";
import _ from "lodash";
import { useState } from "react";
import SpaceAndPlaceForm from "../../forms/SpaceAndPlaceForm";
import { locationTypeDropdownValues } from "../../values/dropdownValues";
import { leaseOwnValues } from "../../values/segmentedControlValues";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${spacer40};
	gap: ${spacer8};
`;

export default () => {
	const [locationType, setLocationType] = useState<LocationType | null>(null);

	const [options, setOptions] = useState(leaseOwnValues);

	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Business Location</Type>
			<DropdownSelect
				id={"locationType"}
				name={"locationType"}
				placeholder={"Add location"}
				dataset={locationTypeDropdownValues}
				onselect={(value) => setLocationType(value.id)}
			/>

			{/* Space and Place form */}
			<SpaceAndPlaceForm locationType={locationType}>
				{locationType === LocationType.RETAIL && (
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
				)}
				{locationType === LocationType.ONLINE && <p>ONLINE</p>}
			</SpaceAndPlaceForm>
		</StyledContainer>
	);
};
