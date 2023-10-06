"use client";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import ButtonText from "../common/Button/ButtonText";
import { StyledNavbar, StyledNavbuttonsContainer } from "./styles";

export default () => {
	return (
		<StyledNavbar>
			{/* Logo */}
			<ButtonText
				navigate="/"
				semanticfont={semanticFonts.logo}
				color={colorBaseMap[ColorBaseCore.RED_3]}
			>
				CAROT
			</ButtonText>

			{/* Navigation */}
			<StyledNavbuttonsContainer>
				{/* TOOL */}
				<ButtonText
					semanticfont={semanticFonts.headlineSmall}
					navigate="/vision-free"
				>
					TOOL
				</ButtonText>
				{/* ABOUT */}
				<ButtonText
					semanticfont={semanticFonts.headlineSmall}
					navigate="/about"
				>
					ABOUT
				</ButtonText>
				{/* BLOG */}
				<ButtonText semanticfont={semanticFonts.headlineSmall} navigate="/blog">
					BLOG
				</ButtonText>
			</StyledNavbuttonsContainer>
		</StyledNavbar>
	);
};
