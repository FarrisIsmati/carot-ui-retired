import { spacer40, spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

export const FieldsContainer = styled.div<{ noMargin?: boolean }>`
	display: flex;
	flex-direction: column;
	margin-top: ${(props) => (props.noMargin ? 0 : spacer40)};
	gap: ${spacer8};
`;

export const StyledDoubleDropdownContainer = styled.div`
	display: flex;
	gap: ${spacer8};
`;
