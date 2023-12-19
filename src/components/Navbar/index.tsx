"use client";
import ButtonText from "@/designSystem/Button/ButtonText";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { StyledNavbar, StyledNavbuttonsContainer } from "./styles";

const Navbar = () => {
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

export default Navbar;
