import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes } from "@/styles/sizes";
import { AsProp } from "@/utils/typeHelpers";
import React from "react";
import { ButtonPrimaryProps, ButtonStyled } from "../ButtonPrimary";
import {
	ButtonIconPosition,
	IconButtonWrapper,
} from "../ButtonPrimary/IconButtonWrapper";

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
		const renderIcon = (position: ButtonIconPosition, icon?: AsProp) =>
			icon && <IconButtonWrapper icon={icon} position={position} size={size} />;

		return (
			<ButtonStyled
				ref={ref}
				component={!component && props.href ? "a" : component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				size={size}
				fullWidth={fullWidth}
				onClick={(e: any) => {
					e.target.blur();
				}}
				{...props}
			>
				{renderIcon(ButtonIconPosition.TRAILING, iconTrailing)}
				{renderIcon(ButtonIconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(ButtonIconPosition.LEADING, iconLeading)}
			</ButtonStyled>
		);
	}
);
