import {
	ColorBaseCore,
	ColorSet,
	SemanticSetCores,
	colorBaseMap,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer200, spacer4, spacer8 } from "@/styles/sizes";
import { elementOrStringToTypeComponent } from "@/utils/componentHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { RichTooltipProps } from "./RichTooltip";

export type PlainTooltipProps = Omit<
	RichTooltipProps,
	| "firstAction"
	| "secondAction"
	| "firstActionName"
	| "secondActionName"
	| "title"
> & {
	/**
	 * Set the semantic color used by the button
	 * @default 'BASE'
	 **/
	colorSet?: ColorSet;
};

export const StyledRichTooltip = styled(
	React.forwardRef<JSX.Element, PlainTooltipProps>(function PlainTooltip(
		{ component: Component = "div", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${() => css`
		border-radius: ${spacer4};
		padding: ${spacer12};
		background-color: ${colorBaseMap[ColorBaseCore.BLACK]};
		width: fit-content;
		max-width: ${spacer200};
	`}
`;

const StyledPlainTooltipContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

export default React.forwardRef<HTMLElement, PlainTooltipProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.PRIMARY),
			body,
			component,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const BodyComponent = elementOrStringToTypeComponent({
			el: body,
			font: semanticFonts.bodySmall,
			colorSet,
		});
		const ChildrenComponent = elementOrStringToTypeComponent({
			el: children,
			font: semanticFonts.bodySmall,
			colorSet,
		});
		return (
			<StyledRichTooltip
				ref={ref}
				component={!component && props.href ? "a" : component}
				{...props}
			>
				<StyledPlainTooltipContentContainer>
					{BodyComponent}
					{ChildrenComponent}
				</StyledPlainTooltipContentContainer>
			</StyledRichTooltip>
		);
	}
);
