"use client";
import VisionDemo from "@/components/VisionForm/VisionDemo";
import BlurbSmall from "@/components/common/Blurb/BlurbSmall";
import Type from "@/designSystem/Type";
import { createStore } from "@/redux/store";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { StyledPageContainer } from "@/styles/common";
import { semanticFonts } from "@/styles/fonts";
import {
	spacer12,
	spacer16,
	spacer24,
	spacer4,
	spacer64,
} from "@/styles/sizes";
import { Provider } from "react-redux";
import { styled } from "styled-components";

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

const VisionDemoPage = () => {
	const store = createStore();

	return (
		<Provider store={store}>
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
					<BlurbSmall body={"Some interesting words"} buttonText="Button" />
				</StyledHeaderSection>

				{/* Vision Demo Form */}
				<VisionDemo />
			</StyledPageContainer>
		</Provider>
	);
};

export default VisionDemoPage;
