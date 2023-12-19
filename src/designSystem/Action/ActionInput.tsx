import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import { KeyboardDetectionContext } from "@/utils/context";
import { Add } from "@material-ui/icons";
import React, { useContext, useEffect, useRef, useState } from "react";

import Dot from "../Badge/Dot";
import { IconWrapper } from "../IconWrapper";
import { FormInputProps } from "../TextField";
import {
	ClearButtonContainer,
	ContentContainer,
	MarginTopType,
	StyledInput,
	StyledInputContainer,
} from "../TextField/styles";
import useKeyPress from "../hooks/useKeyPress";

export interface ActionInputProps
	extends Omit<FormInputProps, "label" | "onClear"> {
	/**
	 * Action to perform when adding action to list
	 */
	onAdd: () => void;
}

const ActionInput = React.forwardRef<HTMLElement, ActionInputProps>(
	function FormInput({
		error,
		disabled,
		placeholder,
		icon,
		onAdd,
		errorText,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		...props
	}) {
		const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [content, setContent] = useState("");

		// On submit value
		const onEnterItem = () => {
			if (!error && content && !disabled) {
				onAdd();
				if (inputRef.current) {
					inputRef.current.value = "";
					setContent("");
				}
			}
		};

		const enterPress = useKeyPress("Enter");

		// On press enter submit
		useEffect(() => {
			if (
				inputRef.current === document.activeElement &&
				content !== "" &&
				enterPress
			) {
				onEnterItem();
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [enterPress]);

		// Add error state if error text included
		if (!error && errorText) {
			error = true;
		}

		return (
			<StyledInputContainer
				colorSet={colorSet}
				disabled={disabled}
				error={error}
			>
				<ContentContainer>
					<StyledInput
						ref={(el: HTMLInputElement) => {
							if (inputRef && !inputRef.current) {
								inputRef.current = el;
							}
						}}
						isUsingKeyboard={isUsingKeyboard}
						error={error}
						aria-invalid={error}
						colorSet={colorSet}
						disabled={disabled}
						placeholder={placeholder}
						onChange={(e: any) => {
							setContent(e.target.value);
						}}
						{...props}
					/>
					{errorText && !disabled && (
						<MarginTopType
							colorset={colorSet}
							error={error}
							semanticfont={semanticFonts.bodySmall}
						>
							{errorText}
						</MarginTopType>
					)}
				</ContentContainer>
				{error && !disabled && (
					<div>
						<Dot />
					</div>
				)}
				<ClearButtonContainer>
					<IconWrapper
						onClick={() => {
							onEnterItem();
						}}
						icon={Add}
						padding={spacer2}
						size={Sizes.SMALL}
						disabled={error || !content || disabled}
					/>
				</ClearButtonContainer>
			</StyledInputContainer>
		);
	}
);

export default ActionInput;
