import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";

import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import { staffTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";

export default () => {
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
