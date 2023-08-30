import React from "react";

// Any prop that behaves like `as` from styled-components (ie `component` in button)
export type AsProp =
	| keyof JSX.IntrinsicElements
	| React.ComponentType<React.PropsWithChildren<any>>;

/**
 * Compatibiliy type to include all html attributes with a fix for the `as` prop collision
 **/
export type StyledWrapperProps = { as?: AsProp; css?: any } & Omit<
	React.AllHTMLAttributes<any>,
	"as" | "css"
>;

/**
 * Utility type to make it easy to add documented pseudo state types to components
 * @example
 * export type ComponentProps = StyledWrapperProps & Pick<PseudoStateProps, 'isHover' | 'isFocus'>;
 */
export type PseudoClassProps = {
	isHover?: boolean;
	hover?: boolean;
	isFocus?: boolean;
	focus?: boolean;
	isActive?: boolean;
	active?: boolean;
};

/**
 * Convert a token in px format to integer
 **/
export const pxToInt = (px: string) => parseInt(px, 10);
