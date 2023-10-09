import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer40, spacer88 } from "@/styles/sizes";
import { styled } from "styled-components";

export const StyledNavbar = styled.section`
	display: flex;
	padding: ${spacer40} ${spacer88};
	align-items: center;
	justify-content: space-between;
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

export const StyledNavbuttonsContainer = styled.nav`
	display: flex;
	gap: ${spacer40};
`;
