import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import Type from "@/designSystem/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer16, spacer24, spacer4 } from "@/styles/sizes";
import styled from "styled-components";

const StyledTempBlurb = styled.div`
	border-radius: ${spacer4};
	padding: ${spacer16} ${spacer24};
	color: ${colorBaseMap[ColorBaseCore.BLACK]};
	background-color: ${colorBaseMap[ColorBaseCore.RED_7]};
	width: fit-content;
	height: fit-content;
	text-wrap: nowrap;
	display: flex;
	flex-direction: column;
`;

const ButtonContainer = styled.div`
	margin-top: ${spacer24};
`;

interface BlurbLargeProps {
	headline: string;
	body: string;
	buttonText: string;
}

const BlurbLarge = ({ headline, body, buttonText }: BlurbLargeProps) => {
	return (
		<StyledTempBlurb>
			<Type semanticfont={semanticFonts.headlineSmall}>{headline}</Type>
			<Type semanticfont={semanticFonts.bodyMedium}>{body}</Type>
			<ButtonContainer>
				<ButtonPrimary size={Sizes.SMALL}>{buttonText}</ButtonPrimary>
			</ButtonContainer>
		</StyledTempBlurb>
	);
};

export default BlurbLarge;
