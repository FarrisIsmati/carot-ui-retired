import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes, iconButtonPaddingMap } from "@/styles/sizes";
import { AsProp } from "@/utils/typeHelpers";
import React from "react";
import { styled } from "styled-components";
import { ButtonPrimaryProps, ButtonStyled } from "../ButtonPrimary";
import { IconPosition, IconWrapper } from "../ButtonPrimary/IconWrapper";

const ButtonTertiaryStyled = styled(ButtonStyled)`
	background-color: transparent;
`;

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
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
			<ButtonTertiaryStyled
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
				{renderIcon(IconPosition.TRAILING, iconTrailing)}
				{renderIcon(IconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</ButtonTertiaryStyled>
		);
	}
);
