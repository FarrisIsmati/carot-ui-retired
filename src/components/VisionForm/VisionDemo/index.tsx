import { spacer40 } from "@/styles/sizes";
import { styled } from "styled-components";
import Results from "./Results";
import { VisionDemoForm } from "./forms";

const StyledContainer = styled.div`
	display: flex;
	gap: ${spacer40};
	margin-top: ${spacer40};
`;

const VisionDemo = () => {
	return (
		<StyledContainer>
			<VisionDemoForm />
			<Results />
		</StyledContainer>
	);
};

export default VisionDemo;
