import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import Type from "@/designSystem/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer12, spacer16, spacer4 } from "@/styles/sizes";
import styled from "styled-components";

const StyledTempBlurb = styled.div`
	border-radius: ${spacer4};
	padding: ${spacer12};
	color: ${colorBaseMap[ColorBaseCore.BLACK]};
	background-color: ${colorBaseMap[ColorBaseCore.RED_7]};
	width: fit-content;
	height: fit-content;
	text-wrap: nowrap;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${spacer16};
`;

interface BlurbSmallProps {
	body: string;
	buttonText: string;
}

const BlurbSmall = ({ body, buttonText }: BlurbSmallProps) => {
	return (
		<StyledTempBlurb>
			<Type semanticfont={semanticFonts.headlineSmall}>{body}</Type>
			<ButtonPrimary size={Sizes.SMALL}>{buttonText}</ButtonPrimary>
		</StyledTempBlurb>
	);
};

export default BlurbSmall;
