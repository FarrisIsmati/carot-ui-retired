"use client";
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import Type from "@/components/common/Type";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { StyledPageContainer } from "@/styles/common";
import { semanticFonts } from "@/styles/fonts";
import {
	Sizes,
	spacer12,
	spacer16,
	spacer24,
	spacer4,
	spacer64,
} from "@/styles/sizes";
import { styled } from "styled-components";
import { VisionDemoForm } from "../../VisionForm/VisionDemo/forms";

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

const StyledHeaderSection = styled.section`
	display: flex;
	gap: ${spacer64};
	margin-bottom: ${spacer24};
`;

export default () => {
	return (
		<StyledPageContainer>
			{/* Header */}
			<StyledHeaderSection>
				<div>
					<Type semanticfont={semanticFonts.displayMedium}>
						Business projection calculator demo
					</Type>
					<Type semanticfont={semanticFonts.headlineLarge}>
						Discover how much you need to start your business with our free
						financial planning tool. Easy to use and completely free.
					</Type>
				</div>
				<StyledTempBlurb>
					<Type semanticfont={semanticFonts.headlineSmall}>
						Some interesting words
					</Type>
					<ButtonPrimary size={Sizes.SMALL}>Button</ButtonPrimary>
				</StyledTempBlurb>
			</StyledHeaderSection>

			{/* Vision Demo Form */}
			<VisionDemoForm />
		</StyledPageContainer>
	);
};
