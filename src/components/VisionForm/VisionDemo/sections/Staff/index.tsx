import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";

import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import { staffTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";

const Staff = () => {
	return (
		<FieldsContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Staff</Type>
			<DropdownSelect
				id={"staffType"}
				name={"staffType"}
				placeholder={"Add staff"}
				dataset={staffTypeDropdownValues}
				islocked
			/>
		</FieldsContainer>
	);
};

export default Staff;
