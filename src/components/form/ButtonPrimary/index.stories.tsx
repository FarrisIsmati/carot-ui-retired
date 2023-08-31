import { Sizes } from "@/styles/sizes";

import { ArrowBack, ArrowForward, ArrowUpward } from "@material-ui/icons";
import { default as PrimaryButton } from "./index";
export default {
	component: PrimaryButton,
	title: "Primary Button",
	tags: ["autodocs"],
};

// Large
export const Default = () => <PrimaryButton>Button</PrimaryButton>;

export const ButtonWithIconTrailingLarge = () => (
	<PrimaryButton iconTrailing={ArrowBack}>Button</PrimaryButton>
);

export const ButtonWithIconLeadingLarge = () => (
	<PrimaryButton iconLeading={ArrowForward}>Button</PrimaryButton>
);

export const ButtonIconOnlyLarge = () => (
	<PrimaryButton iconOnly={ArrowUpward} />
);

export const ButtonDisabledLarge = () => (
	<PrimaryButton disabled>Button</PrimaryButton>
);

// Small
export const ButtonWithIconTrailingSmall = () => (
	<PrimaryButton iconTrailing={ArrowBack} size={Sizes.SMALL}>
		Button
	</PrimaryButton>
);

export const ButtonWithIconLeadingSmall = () => (
	<PrimaryButton iconLeading={ArrowForward} size={Sizes.SMALL}>
		Button
	</PrimaryButton>
);

export const ButtonIconOnlySmall = () => (
	<PrimaryButton iconOnly={ArrowUpward} size={Sizes.SMALL} />
);

export const ButtonDisabledSmall = () => (
	<PrimaryButton disabled size={Sizes.SMALL}>
		Button
	</PrimaryButton>
);
