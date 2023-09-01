import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes } from "@/styles/sizes";
import { AsProp } from "@/utils/typeHelpers";
import React from "react";
import {
	ButtonPrimaryProps,
	ButtonStyled,
	iconButtonPaddingMap,
} from "../ButtonPrimary";
import { IconPosition, IconWrapper } from "../IconWrapper";

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.PRIMARY_ALT),
			component,
			size = Sizes.LARGE,
			fullWidth,
			iconLeading,
			iconTrailing,
			iconOnly,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const renderIcon = (position: IconPosition, icon?: AsProp) =>
			icon && (
				<IconWrapper
					icon={icon}
					position={position}
					size={size}
					padding={iconButtonPaddingMap[size]}
				/>
			);

		return (
			<ButtonStyled
				ref={ref}
				component={!component && props.href ? "a" : component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				size={size}
				iconLeading={iconLeading}
				iconTrailing={iconTrailing}
				iconOnly={iconOnly}
				fullWidth={fullWidth}
				onClick={(e: any) => {
					e.target.blur();
				}}
				{...props}
			>
				{renderIcon(IconPosition.TRAILING, iconTrailing)}
				{renderIcon(IconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</ButtonStyled>
		);
	}
);
