import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { styled } from "styled-components";

export type LockSmallProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
	};

const StyledSVG = styled.svg<LockSmallProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	fill: ${(props) =>
		props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
`;

const LockSmall = ({
	colorSet = getColorSet(SemanticSetCores.BASE),
	disabled,
}: LockSmallProps) => (
	<StyledSVG
		colorSet={colorSet}
		disabled={disabled}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6 10V18H18V10H16V8C16 6.89333 15.6111 5.95 14.8333 5.17C14.0556 4.39 13.1127 4 12.0047 4C10.8967 4 9.95229 4.39 9.17138 5.17C8.39046 5.95 8 6.89333 8 8V10H6ZM14.5 8V10H9.5V8C9.5 7.30556 9.74306 6.71528 10.2292 6.22917C10.7153 5.74306 11.3056 5.5 12 5.5C12.6944 5.5 13.2847 5.74306 13.7708 6.22917C14.2569 6.71528 14.5 7.30556 14.5 8ZM13 15V13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15Z"
		/>
	</StyledSVG>
);

export default LockSmall;
