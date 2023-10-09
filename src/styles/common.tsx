import { styled } from "styled-components";
import { ColorBaseCore, colorBaseMap } from "./colors";
import { spacer80, spacer88 } from "./sizes";

export const StyledPageContainer = styled.div`
	background-color: ${colorBaseMap[ColorBaseCore.NEUTRAL_10]};
	padding: ${spacer80} ${spacer88};
`;
