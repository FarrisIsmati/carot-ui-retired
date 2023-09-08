import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { formControlBaseSelect, rootStyle } from "@/styles/mixins";
import {
	Sizes,
	spacer10,
	spacer12,
	spacer2,
	spacer320,
	spacer4,
	spacer8,
} from "@/styles/sizes";
import { KeyboardDetectionContext } from "@/utils/context";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useContext } from "react";
import { css, styled } from "styled-components";
import { IconWrapper } from "../IconWrapper";
import Type from "../Type";

export type DropdownProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * If true adds styling to indicate error state
		 */
		error?: boolean;
		/**
		 * Label title
		 */
		label?: string;
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
		/**
		 * Text to display for an error state
		 */
		errorText?: string;
		/**
		 * isMenuOpen
		 */
		isMenuOpen?: boolean;
	};

export const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const DropdownTrigger = styled.button<
	DropdownProps & { isUsingKeyboard: boolean }
>`
	${(props) => {
		const highlightColor = getColorSet(SemanticSetCores.PRIMARY_ALT).essential
			.default;
		const errorColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;

		return css`
			${rootStyle()};
			${formControlBaseSelect()};
			display: flex;
			flex-direction: column;
			text-align: start;
			overflow-wrap: break-word;
			width: ${spacer320};
			${semanticFonts.bodyLarge};
			margin-top: ${spacer8};
			border: none;
			background-color: ${props.colorSet?.essential.default};
			border-radius: ${spacer4};
			padding: ${spacer10} ${spacer12} ${spacer12} ${spacer12};
			box-shadow: ${!props.disabled && props.error
				? `0 -${spacer2} 0 0 ${errorColor} inset`
				: "none"};

			&:disabled {
				background-color: ${props.colorSet?.essential.disabled};
				color: ${props.colorSet?.text.disabled};
			}

			&:hover:not([disabled]) {
				background-color: ${props.colorSet?.essential.hover};
				color: ${props.colorSet?.text.hover};
			}

			&:focus-within {
				background-color: ${props.colorSet?.essential.focus};
				box-shadow: ${!props.disabled
					? `0 -${spacer2} 0 0 ${
							props.error ? errorColor : highlightColor
					  } inset`
					: "none"};
			}
		`;
	}}
`;

export default ({
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	children,
	disabled,
	isMenuOpen,
	...props
}: DropdownProps) => {
	const { isUsingKeyboard } = useContext(KeyboardDetectionContext);

	return (
		<DropdownTrigger
			isUsingKeyboard={isUsingKeyboard}
			aria-haspopup="listbox"
			{...props}
		>
			{label && (
				<Type
					colorSet={colorSet}
					disabled={disabled}
					error={error}
					font={semanticFonts.bodySmall}
				>
					Label
				</Type>
			)}
			<ContentContainer>
				{children}
				{isMenuOpen ? (
					<IconWrapper
						icon={ArrowUpward}
						padding={spacer2}
						size={Sizes.SMALL}
						disabled={disabled}
					/>
				) : (
					<IconWrapper
						icon={ArrowDownward}
						padding={spacer2}
						size={Sizes.SMALL}
						disabled={disabled}
					/>
				)}
			</ContentContainer>
		</DropdownTrigger>
	);
};
