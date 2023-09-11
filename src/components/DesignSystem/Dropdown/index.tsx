import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useState } from "react";
import Overlay, { OverlayDirections } from "../Overlay";
import TypeListItem from "../TypeList/TypeListItem";
import { DropdownList } from "./DropdownList";
import DropdownTrigger from "./DropdownTrigger";

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
	};

export default ({
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	children,
	disabled,
	...props
}: DropdownProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<>
			<DropdownTrigger
				label={label}
				colorSet={colorSet}
				error={error}
				errorText={errorText}
				disabled={disabled}
				isMenuOpen={isMenuOpen}
				onClickMenu={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			>
				{children}
			</DropdownTrigger>

			{isMenuOpen && (
				<Overlay placement={OverlayDirections.BOTTOM}>
					<DropdownList>
						<TypeListItem>Option 1</TypeListItem>
						<TypeListItem>Option 2</TypeListItem>
						<TypeListItem>Option 3</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
						<TypeListItem>Option 4</TypeListItem>
					</DropdownList>
				</Overlay>
			)}
		</>
	);
};
