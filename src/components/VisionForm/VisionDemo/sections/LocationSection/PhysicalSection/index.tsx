import {
	PhysicalFinanceType,
	PhysicalUseType,
} from "@/types/VisionForm/locationSection";
import { useState } from "react";

import PhysicalFinanceTypeControl from "../../../fields/Location/Physical/PhysicalFinanceTypeControl";
import PhysicalUseTypeControl from "../../../fields/Location/Physical/PhysicalUseTypeControl";
import LeaseForm from "../../../forms/LocationForm/PhysicalForm/LeaseForm";
import { FieldsContainer } from "../../styles";
import LeaseSection from "./LeaseSection";

const PhysicalSection = () => {
	const [financeType, setFinanceType] = useState(PhysicalFinanceType.LEASE);
	const [useType, setUseType] = useState(PhysicalUseType.RETAIL); // Currently no use for useType (not giving office option)

	return (
		<FieldsContainer noMargin>
			<PhysicalFinanceTypeControl setFinanceType={setFinanceType} />
			<PhysicalUseTypeControl setUseType={setUseType} />
			{financeType === PhysicalFinanceType.LEASE && (
				<LeaseForm>
					<LeaseSection />
				</LeaseForm>
			)}
			{financeType === PhysicalFinanceType.OWN && <p>Own</p>}
		</FieldsContainer>
	);
};

export default PhysicalSection;
