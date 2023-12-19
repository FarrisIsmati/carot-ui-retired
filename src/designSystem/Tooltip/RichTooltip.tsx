import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
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
import styled, { RuleSet, css } from "styled-components";
import ButtonText from "../Button/ButtonText";

export type RichTooltipProps = Omit<StyledWrapperProps, "size"> &
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
		/**
		 * Set the semantic color used by the button
		 * @default 'BASE'
		 **/
		colorset?: ColorSet;
		/**
		 * Semantic font
		 **/
		semanticfont?: RuleSet<object>;
	};

export const StyledRichTooltip = styled(
	React.forwardRef<JSX.Element, RichTooltipProps>(function RichTooltip(
		{ component: Component = "div", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			display: flex;
			flex-direction: column;
			color: ${props.colorset?.text.default};
			background-color: ${props.colorset?.essential.default};
			gap: ${spacer24};
			border-radius: ${spacer8};
			width: ${spacer320};
			padding: ${spacer16};
			box-shadow: 0 ${spacer8} ${spacer16} rgba(0, 0, 0, 0.08);
		`;
	}}
`;

const StyledRichTooltipContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const StyledRichTooltipActionContainer = styled.div`
	display: flex;
	gap: ${spacer12};
`;

const RichTooltip = React.forwardRef<HTMLElement, RichTooltipProps>(
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
			semanticfont = semanticFonts.bodyMedium,
			colorset = getColorSet(SemanticSetCores.DARK),
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const TitleComponent = elementOrStringToTypeComponent({
			el: title,
			font: semanticFonts.labelLarge,
		});
		const BodyComponent = elementOrStringToTypeComponent({
			el: body,
			font: semanticfont,
		});
		const ChildrenComponent = elementOrStringToTypeComponent({
			el: children,
			font: semanticfont,
		});
		return (
			<StyledRichTooltip
				ref={ref}
				component={!component && props.href ? "a" : component}
				colorset={colorset}
				{...props}
			>
				<StyledRichTooltipContentContainer>
					{TitleComponent}
					{BodyComponent}
					{ChildrenComponent}
				</StyledRichTooltipContentContainer>
				{(firstActionName !== undefined || secondActionName !== undefined) && (
					<StyledRichTooltipActionContainer>
						{firstActionName !== undefined && (
							<ButtonText onClick={firstAction}>{firstActionName}</ButtonText>
						)}
						{secondActionName !== undefined && (
							<ButtonText onClick={secondAction}>{secondActionName}</ButtonText>
						)}
					</StyledRichTooltipActionContainer>
				)}
			</StyledRichTooltip>
		);
	}
);

export default RichTooltip;
