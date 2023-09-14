import { Sizes } from "@/styles/sizes";

import { ArrowBack, ArrowForward, ArrowUpward } from "@material-ui/icons";
import ButtonTertiary from "./ButtonTertiary";
export default {
	component: ButtonTertiary,
	title: "Tertiary Button",
	tags: ["autodocs"],
};

// Large
export const Default = () => <ButtonTertiary>Button</ButtonTertiary>;

export const ButtonWithIconTrailingLarge = () => (
	<ButtonTertiary iconTrailing={ArrowBack}>Button</ButtonTertiary>
);

export const ButtonWithIconLeadingLarge = () => (
	<ButtonTertiary iconLeading={ArrowForward}>Button</ButtonTertiary>
);

export const ButtonIconOnlyLarge = () => (
	<ButtonTertiary iconOnly={ArrowUpward} />
);

export const ButtonDisabledLarge = () => (
	<ButtonTertiary disabled>Button</ButtonTertiary>
);

// Small
export const ButtonWithIconTrailingSmall = () => (
	<ButtonTertiary iconTrailing={ArrowBack} size={Sizes.SMALL}>
		Button
	</ButtonTertiary>
);

export const ButtonWithIconLeadingSmall = () => (
	<ButtonTertiary iconLeading={ArrowForward} size={Sizes.SMALL}>
		Button
	</ButtonTertiary>
);

export const ButtonIconOnlySmall = () => (
	<ButtonTertiary iconOnly={ArrowUpward} size={Sizes.SMALL} />
);

export const ButtonDisabledSmall = () => (
	<ButtonTertiary disabled size={Sizes.SMALL}>
		Button
	</ButtonTertiary>
);
