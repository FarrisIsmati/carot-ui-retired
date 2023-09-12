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
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useContext } from "react";
import { css, styled } from "styled-components";
import { DropdownData } from ".";
import { IconWrapper } from "../IconWrapper";
import { MarginTopType } from "../TextField";
import Type from "../Type";

export type DropdownTriggerProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Click menu
		 */
		onClickMenu: () => void;
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
		/**
		 * Selected value
		 */
		selectedItem: DropdownData | null;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
	};

const StyledText = styled(Type)`
	${semanticFonts.bodyLarge};

	&:disabled {
		color: ${(props) => props.colorSet?.text.disabled};
	}

	&:hover:not([disabled]) {
		background-color: ${(props) => props.colorSet?.essential.hover};
	}
`;

export const DropdownTrigger = styled.div<DropdownTriggerProps>`
	${(props) => {
		const highlightColor = getColorSet(SemanticSetCores.PRIMARY_ALT).essential
			.default;
		const errorColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;
		const nonFocusBoxShadow = () => {
			if (props.disabled) {
				return "none !important";
			}

			if (!props.disabled && !props.error && props.isMenuOpen) {
				return `0 -${spacer2} 0 0 ${highlightColor} inset !important`;
			}

			if (!props.disabled && props.error) {
				return `0 -${spacer2} 0 0 ${errorColor} inset !important`;
			}

			return "none !important";
		};

		return css`
			${rootStyle()};
			${formControlBaseSelect()};
			display: flex;
			flex-direction: column;
			text-align: start;
			overflow-wrap: break-word;

			margin-top: ${spacer8};
			border: none;

			width: ${spacer320};
			background-color: ${props.colorSet?.essential.default};
			border-radius: ${spacer4};
			padding: ${spacer10} ${spacer12} ${spacer12} ${spacer12};
			box-shadow: ${nonFocusBoxShadow()};

			&:disabled {
				background-color: ${props.colorSet?.essential.disabled};
			}

			&:hover:not([disabled]) {
				background-color: ${props.colorSet?.essential.hover};
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

export const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export default ({
	onClickMenu,
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	children,
	disabled,
	isMenuOpen,
	placeholder,
	selectedItem,
	...props
}: DropdownTriggerProps) => {
	const { isUsingKeyboard } = useContext(KeyboardDetectionContext);

	return (
		<DropdownTrigger
			colorSet={colorSet}
			isMenuOpen={isMenuOpen}
			error={error}
			isUsingKeyboard={isUsingKeyboard}
			aria-haspopup="listbox"
			onClick={onClickMenu}
			disabled={disabled}
			{...props}
		>
			{label && (
				<Type
					colorSet={colorSet}
					disabled={disabled}
					error={error}
					font={semanticFonts.bodySmall}
				>
					{label}
				</Type>
			)}
			<ContentContainer>
				<StyledText disabled={disabled} colorSet={colorSet}>
					{!selectedItem && placeholder}
					{selectedItem && selectedItem.value}
				</StyledText>
				{isMenuOpen ? (
					<IconWrapper
						icon={KeyboardArrowUp}
						padding={spacer2}
						size={Sizes.MEDIUM}
						disabled={disabled}
					/>
				) : (
					<IconWrapper
						icon={KeyboardArrowDown}
						padding={spacer2}
						size={Sizes.MEDIUM}
						disabled={disabled}
					/>
				)}
			</ContentContainer>
			{errorText && !disabled && (
				<MarginTopType
					colorSet={colorSet}
					error={error}
					font={semanticFonts.bodySmall}
				>
					{errorText}
				</MarginTopType>
			)}
		</DropdownTrigger>
	);
};
