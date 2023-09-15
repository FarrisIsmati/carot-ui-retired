import { spacer312 } from "@/styles/sizes";
import { elementOrStringToTypeComponent } from "@/utils/componentHelpers";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";

export enum ToolTipTheme {
	LIGHT = "LIGHT",
	DARK = "DARK",
}

export type RichToolTipProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
		/**
		 * Set the tool tip color scheme (outside default colorSet)
		 **/
		theme?: ToolTipTheme;
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
		/**
		 * Chose a name for the action in the first slot
		 **/
		firstActionName?: JSX.Element | string;
		/**
		 * Chose an action to perform in first slot
		 **/
		firstAction?: () => void;
		/**
		 * Chose a name for the action in the second slot
		 **/
		secondActionName?: JSX.Element | string;
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

export const StyledRichToolTip = styled(
	React.forwardRef<JSX.Element, RichToolTipProps>(function Button(
		{ component: Component = "div", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			width: ${spacer312};
		`;
	}}
`;

export default React.forwardRef<HTMLElement, RichToolTipProps>(
	(
		{
			theme,
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
		const FirstActionComponent =
			elementOrStringToTypeComponent(firstActionName);
		const SecondActionComponent =
			elementOrStringToTypeComponent(secondActionName);
		const TitleComponent = elementOrStringToTypeComponent(title);
		const BodyComponent = elementOrStringToTypeComponent(body);
		const ChildrenComponent = elementOrStringToTypeComponent(children);
		return (
			<StyledRichToolTip
				ref={ref}
				component={!component && props.href ? "a" : component}
				{...props}
			>
				{TitleComponent}
				{BodyComponent}
				{ChildrenComponent}
				<>
					{FirstActionComponent}
					{SecondActionComponent}
				</>
			</StyledRichToolTip>
		);
	}
);
