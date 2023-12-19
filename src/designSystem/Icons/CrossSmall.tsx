import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { styled } from "styled-components";

export type CrossSmallProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
	};

const StyledSVG = styled.svg<CrossSmallProps>`
	fill: ${(props) =>
		props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
`;

const CrossSmall = ({
	colorSet = getColorSet(SemanticSetCores.BASE),
	disabled,
}: CrossSmallProps) => (
	<StyledSVG
		colorSet={colorSet}
		disabled={disabled}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12.0001 13.4142L15.293 16.7071L16.7072 15.2928L13.4143 12L16.7072 8.70706L15.293 7.29285L12.0001 10.5857L8.70718 7.29285L7.29297 8.70706L10.5859 12L7.29297 15.2928L8.70718 16.7071L12.0001 13.4142Z" />
		<path d="M12.0001 13.4142L15.793 17.2071L17.2072 15.7928L13.4143 12L17.2072 8.20706L15.793 6.79285L12.0001 10.5857L8.20718 6.79285L6.79297 8.20706L10.5859 12L6.79297 15.7928L8.20718 17.2071L12.0001 13.4142Z" />
	</StyledSVG>
);

export default CrossSmall;
