import { Sizes } from "@/styles/sizes";

import { ArrowBack, ArrowForward, ArrowUpward } from "@material-ui/icons";
import ButtonPrimaryAlt from "./ButtonPrimaryAlt";
export default {
	component: ButtonPrimaryAlt,
	title: "Primary Alt Button",
	tags: ["autodocs"],
};

// Large
export const Default = () => <ButtonPrimaryAlt>Button</ButtonPrimaryAlt>;

export const ButtonWithIconTrailingLarge = () => (
	<ButtonPrimaryAlt iconTrailing={ArrowBack}>Button</ButtonPrimaryAlt>
);

export const ButtonWithIconLeadingLarge = () => (
	<ButtonPrimaryAlt iconLeading={ArrowForward}>Button</ButtonPrimaryAlt>
);

export const ButtonIconOnlyLarge = () => (
	<ButtonPrimaryAlt iconOnly={ArrowUpward} />
);

export const ButtonDisabledLarge = () => (
	<ButtonPrimaryAlt disabled>Button</ButtonPrimaryAlt>
);

// Small
export const ButtonWithIconTrailingSmall = () => (
	<ButtonPrimaryAlt iconTrailing={ArrowBack} size={Sizes.SMALL}>
		Button
	</ButtonPrimaryAlt>
);

export const ButtonWithIconLeadingSmall = () => (
	<ButtonPrimaryAlt iconLeading={ArrowForward} size={Sizes.SMALL}>
		Button
	</ButtonPrimaryAlt>
);

export const ButtonIconOnlySmall = () => (
	<ButtonPrimaryAlt iconOnly={ArrowUpward} size={Sizes.SMALL} />
);

export const ButtonDisabledSmall = () => (
	<ButtonPrimaryAlt disabled size={Sizes.SMALL}>
		Button
	</ButtonPrimaryAlt>
);
