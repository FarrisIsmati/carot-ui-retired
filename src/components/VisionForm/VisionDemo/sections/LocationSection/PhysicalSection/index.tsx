import {
	PhysicalFinanceType,
	PhysicalUseType,
} from "@/types/VisionForm/LocationSection";
import { useState } from "react";

import PhysicalFinanceTypeControl from "../../../fields/Location/Physical/PhysicalFinanceTypeControl";
import PhysicalUseTypeControl from "../../../fields/Location/Physical/PhysicalUseTypeControl";
import { FieldsContainer } from "../../styles";
import LeaseSection from "./LeaseSection";

export default () => {
	const [financeType, setFinanceType] = useState(PhysicalFinanceType.LEASE);
	const [useType, setUseType] = useState(PhysicalUseType.RETAIL); // Currently no use for useType (not giving office option)

	return (
		<FieldsContainer noMargin>
			<PhysicalFinanceTypeControl setFinanceType={setFinanceType} />
			<PhysicalUseTypeControl setUseType={setUseType} />
			{financeType === PhysicalFinanceType.LEASE && <LeaseSection />}
			{financeType === PhysicalFinanceType.OWN && <p>Own</p>}
		</FieldsContainer>
	);
};
