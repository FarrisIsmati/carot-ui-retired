import { Sizes } from "@/styles/sizes";

import { ArrowBack, ArrowForward, ArrowUpward } from "@material-ui/icons";
import ButtonPrimary from "./ButtonPrimary";
export default {
	component: ButtonPrimary,
	title: "Primary Button",
	tags: ["autodocs"],
};

// Large
export const Default = () => <ButtonPrimary>Button</ButtonPrimary>;

export const ButtonWithIconTrailingLarge = () => (
	<ButtonPrimary iconTrailing={ArrowBack}>Button</ButtonPrimary>
);

export const ButtonWithIconLeadingLarge = () => (
	<ButtonPrimary iconLeading={ArrowForward}>Button</ButtonPrimary>
);

export const ButtonIconOnlyLarge = () => (
	<ButtonPrimary iconOnly={ArrowUpward} />
);

export const ButtonDisabledLarge = () => (
	<ButtonPrimary disabled>Button</ButtonPrimary>
);

// Small
export const ButtonWithIconTrailingSmall = () => (
	<ButtonPrimary iconTrailing={ArrowBack} size={Sizes.SMALL}>
		Button
	</ButtonPrimary>
);

export const ButtonWithIconLeadingSmall = () => (
	<ButtonPrimary iconLeading={ArrowForward} size={Sizes.SMALL}>
		Button
	</ButtonPrimary>
);

export const ButtonIconOnlySmall = () => (
	<ButtonPrimary iconOnly={ArrowUpward} size={Sizes.SMALL} />
);

export const ButtonDisabledSmall = () => (
	<ButtonPrimary disabled size={Sizes.SMALL}>
		Button
	</ButtonPrimary>
);
