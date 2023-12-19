import { semanticFonts } from "@/styles/fonts";
import {
	spacer12,
	spacer16,
	spacer24,
	spacer320,
	spacer8,
} from "@/styles/sizes";
import { elementOrStringToTypeComponent } from "@/utils/componentHelpers";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import ButtonText from "../Button/ButtonText";

export type DialogProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
		/**
		 * Chose a name for the action in the first slot
		 **/
		firstActionName?: string;
		/**
		 * Chose an action to perform in first slot
		 **/
		firstAction?: () => void;
		/**
		 * Chose a name for the action in the second slot
		 **/
		secondActionName?: string;
		/**
		 * Chose an action to perform in second slot
		 **/
		secondAction?: () => void;
		/**
		 * Title
		 **/
		title?: JSX.Element | string;
		/**
		 * Body
		 **/
		body?: JSX.Element | string;
	};

export const StyledDialog = styled(
	React.forwardRef<JSX.Element, DialogProps>(function Dialog(
		{ component: Component = "div", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${() => {
		return css`
			display: flex;
			flex-direction: column;
			gap: ${spacer24};
			border-radius: ${spacer8};
			width: ${spacer320};
			padding: ${spacer16};
			box-shadow: 0 ${spacer8} ${spacer16} rgba(0, 0, 0, 0.08);
		`;
	}}
`;

const StyledDialogContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const StyledDialogActionContainer = styled.div`
	display: flex;
	gap: ${spacer12};
`;

const Dialog = React.forwardRef<HTMLElement, DialogProps>(
	(
		{
			firstAction,
			firstActionName,
			secondAction,
			secondActionName,
			title,
			body,
			component,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const TitleComponent = elementOrStringToTypeComponent({
			el: title,
			font: semanticFonts.headlineMedium,
		});
		const BodyComponent = elementOrStringToTypeComponent({
			el: body,
			font: semanticFonts.bodyMedium,
		});
		const ChildrenComponent = elementOrStringToTypeComponent({
			el: children,
			font: semanticFonts.bodyMedium,
		});
		return (
			<StyledDialog
				ref={ref}
				component={!component && props.href ? "a" : component}
				{...props}
			>
				<StyledDialogContentContainer>
					{TitleComponent}
					{BodyComponent}
					{ChildrenComponent}
				</StyledDialogContentContainer>
				{(firstActionName !== undefined || secondActionName !== undefined) && (
					<StyledDialogActionContainer>
						{firstActionName !== undefined && (
							<ButtonText onClick={firstAction}>{firstActionName}</ButtonText>
						)}
						{secondActionName !== undefined && (
							<ButtonText onClick={secondAction}>{secondActionName}</ButtonText>
						)}
					</StyledDialogActionContainer>
				)}
			</StyledDialog>
		);
	}
);

export default Dialog;
