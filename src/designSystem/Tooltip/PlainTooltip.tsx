import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer4, spacer8 } from "@/styles/sizes";
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
> & {};

export const StyledPlainTooltip = styled(
	React.forwardRef<JSX.Element, PlainTooltipProps>(function PlainTooltip(
		{ component: Component = "div", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => css`
		border-radius: ${spacer4};
		padding: ${spacer12};
		color: ${props.colorset?.text.default};
		background-color: ${props.colorset?.essential.default};
		width: fit-content;
		height: fit-content;
	`}
`;

const StyledPlainTooltipContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const PlainTooltip = React.forwardRef<HTMLElement, PlainTooltipProps>(
	(
		{
			colorset = getColorSet(SemanticSetCores.DARK),
			body,
			component,
			semanticfont = semanticFonts.bodySmall,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const BodyComponent = elementOrStringToTypeComponent({
			el: body,
			font: semanticfont,
			colorSet: colorset,
		});
		const ChildrenComponent = elementOrStringToTypeComponent({
			el: children,
			font: semanticfont,
			colorSet: colorset,
		});
		return (
			<StyledPlainTooltip
				ref={ref}
				component={!component && props.href ? "a" : component}
				colorset={colorset}
				{...props}
			>
				<StyledPlainTooltipContentContainer>
					{BodyComponent}
					{ChildrenComponent}
				</StyledPlainTooltipContentContainer>
			</StyledPlainTooltip>
		);
	}
);

export default PlainTooltip;
