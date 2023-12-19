import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";

import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import { LocationType } from "@/types/VisionForm/locationSection";
import { useContext, useState } from "react";
import LocationFormContext from "../../forms/LocationForm/LocationFormContext";
import { locationTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";
import PhysicalSection from "./PhysicalSection";

const LocationSection = () => {
	const [locationType, setLocationType] = useState<LocationType | null>(null);
	const constext = useContext(LocationFormContext);

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
			{locationType === LocationType.PHYSICAL && <PhysicalSection />}
			{locationType === LocationType.ONLINE && <p>ONLINE</p>}
		</FieldsContainer>
	);
};

export default LocationSection;
