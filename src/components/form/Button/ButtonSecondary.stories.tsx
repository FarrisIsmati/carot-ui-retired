import { Sizes } from "@/styles/sizes";

import { ArrowBack, ArrowForward, ArrowUpward } from "@material-ui/icons";
import ButtonSecondary from "./ButtonSecondary";
export default {
	component: ButtonSecondary,
	title: "Secondary Button",
	tags: ["autodocs"],
};

// Large
export const Default = () => <ButtonSecondary>Button</ButtonSecondary>;

export const ButtonWithIconTrailingLarge = () => (
	<ButtonSecondary iconTrailing={ArrowBack}>Button</ButtonSecondary>
);

export const ButtonWithIconLeadingLarge = () => (
	<ButtonSecondary iconLeading={ArrowForward}>Button</ButtonSecondary>
);

export const ButtonIconOnlyLarge = () => (
	<ButtonSecondary iconOnly={ArrowUpward} />
);

export const ButtonDisabledLarge = () => (
	<ButtonSecondary disabled>Button</ButtonSecondary>
);

// Small
export const ButtonWithIconTrailingSmall = () => (
	<ButtonSecondary iconTrailing={ArrowBack} size={Sizes.SMALL}>
		Button
	</ButtonSecondary>
);

export const ButtonWithIconLeadingSmall = () => (
	<ButtonSecondary iconLeading={ArrowForward} size={Sizes.SMALL}>
		Button
	</ButtonSecondary>
);

export const ButtonIconOnlySmall = () => (
	<ButtonSecondary iconOnly={ArrowUpward} size={Sizes.SMALL} />
);

export const ButtonDisabledSmall = () => (
	<ButtonSecondary disabled size={Sizes.SMALL}>
		Button
	</ButtonSecondary>
);
