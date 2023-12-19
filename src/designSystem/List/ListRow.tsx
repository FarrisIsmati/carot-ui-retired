import {
	ColorBaseCore,
	ColorSet,
	SemanticSetCores,
	colorBaseMap,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer16, spacer320, spacer4 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { css, styled } from "styled-components";
import Type from "../Type";

export type ListProps = StyledWrapperProps & {
	/**
	 * Set the semantic color used by the button
	 * @default 'Secondary
	 **/
	colorSet?: ColorSet;
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'ul'
	 **/
	component?: AsProp;
	/**
	 * Supporting text under list item
	 */
	supportingText?: string;
};

export const StyledListItem = styled(
	React.forwardRef<HTMLElement, ListProps>(function Button(
		{ component: Component = "li", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => css`
		/* Remove default styles */
		list-style-type: none; /* Remove bullets */
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		width: ${spacer320};
		border-radius: ${spacer4};
		border: none;
		background-color: ${props.colorSet?.essential.default};
		padding: ${spacer16} ${spacer12};
	`}
`;

const ListRow = React.forwardRef<HTMLElement, ListProps>(function List(
	{
		children,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		supportingText,
		...props
	},
	ref
) {
	let content: React.ReactNode | null = null;
	try {
		React.Children.only(children);
		// If react node set content to children
		content = children;
	} catch (e) {
		// If string only set content to string wrapped in Type component
		content = (
			<Type
				semanticfont={semanticFonts.bodyLarge}
				colorset={getColorSet(SemanticSetCores.BASE)}
			>
				{children}
			</Type>
		);
	}
	return (
		<StyledListItem ref={ref} colorSet={colorSet} {...props}>
			{content}
			{supportingText && (
				<Type
					semanticfont={semanticFonts.bodySmall}
					color={colorBaseMap[ColorBaseCore.NEUTRAL_3]}
				>
					{supportingText}
				</Type>
			)}
		</StyledListItem>
	);
});

export default ListRow;
