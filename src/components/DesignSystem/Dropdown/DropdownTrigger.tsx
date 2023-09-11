import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { formControlBaseSelect, rootStyle } from "@/styles/mixins";
import {
	Sizes,
	spacer10,
	spacer12,
	spacer2,
	spacer4,
	spacer8,
} from "@/styles/sizes";
import { KeyboardDetectionContext } from "@/utils/context";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useContext } from "react";
import { css, styled } from "styled-components";
import { IconWrapper } from "../IconWrapper";
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
	};

export const DropdownContainer = styled.div<DropdownTriggerProps>`
	${(props) => {
		const highlightColor = getColorSet(SemanticSetCores.PRIMARY_ALT).essential
			.default;
		const errorColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;

		return css`
			/* 296 subtracting the padding adding extra space  */
			width: 296px;
			background-color: ${props.colorSet?.essential.default};
			border-radius: ${spacer4};
			padding: ${spacer10} ${spacer12} ${spacer12} ${spacer12};
			box-shadow: ${!props.disabled && props.error
				? `0 -${spacer2} 0 0 ${errorColor} inset`
				: "none"};

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

export const DropdownTrigger = styled.button<
	DropdownTriggerProps & { isUsingKeyboard: boolean }
>`
	${(props) => css`
		${rootStyle()};
		${formControlBaseSelect()};
		display: flex;
		flex-direction: column;
		text-align: start;
		overflow-wrap: break-word;
		width: 100%;
		background-color: transparent;
		padding: 0;

		${semanticFonts.bodyLarge};
		margin-top: ${spacer8};
		border: none;

		&:disabled {
			color: ${props.colorSet?.text.disabled};
		}

		&:hover:not([disabled]) {
			color: ${props.colorSet?.text.hover};
		}
	`}
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

	...props
}: DropdownTriggerProps) => {
	const { isUsingKeyboard } = useContext(KeyboardDetectionContext);

	return (
		<DropdownContainer
			colorSet={colorSet}
			error={error}
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
					Label
				</Type>
			)}
			<DropdownTrigger
				isUsingKeyboard={isUsingKeyboard}
				aria-haspopup="listbox"
				onClick={onClickMenu}
				{...props}
			>
				<ContentContainer>
					{children}
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
			</DropdownTrigger>
		</DropdownContainer>
	);
};
