import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer40, spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import { LocationType } from "@/types/VisionForm/SpaceAndPlaceSection";
import { useState } from "react";
import SpaceAndPlaceForm from "../../forms/SpaceAndPlaceForm";
import { locationTypeDropdownValues } from "../../values/dropdownValues";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${spacer40};
	gap: ${spacer8};
`;

export default () => {
	const [locationType, setLocationType] = useState<LocationType | null>(null);

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
				{locationType === LocationType.RETAIL && <p>RETAIL</p>}
				{locationType === LocationType.ONLINE && <p>ONLINE</p>}
			</SpaceAndPlaceForm>
		</StyledContainer>
	);
};
