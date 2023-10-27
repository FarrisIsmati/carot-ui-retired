import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";

import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import { LocationType } from "@/types/VisionForm/SpaceAndPlaceSection";
import { useState } from "react";
import SpaceAndPlaceForm from "../../forms/SpaceAndPlaceForm";
import { locationTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";
import Physical from "./Physical";

export default () => {
	const [locationType, setLocationType] = useState<LocationType | null>(null);

	return (
		<FieldsContainer>
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
				{locationType === LocationType.PHYSICAL && <Physical />}
				{locationType === LocationType.ONLINE && <p>ONLINE</p>}
			</SpaceAndPlaceForm>
		</FieldsContainer>
	);
};
