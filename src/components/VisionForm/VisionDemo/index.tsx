import { spacer40 } from "@/styles/sizes";
import { styled } from "styled-components";
import { VisionDemoForm } from "./forms";
import Results from "./results";

const StyledContainer = styled.div`
	display: flex;
	gap: ${spacer40};
	margin-top: ${spacer40};
`;

export default () => {
	return (
		<StyledContainer>
			<VisionDemoForm />
			<Results />
		</StyledContainer>
	);
};
