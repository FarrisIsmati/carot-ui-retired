import { Sizes } from "@/styles/sizes";
import Chip, { ChipType } from ".";
import AccountCircle from "../Icons/AccountCircle";
import CrossSmall from "../Icons/CrossSmall";
import Person from "../Icons/Person";

export default {
	component: Chip,
	title: "Chip",
	tags: ["autodocs"],
};

// Large
export const Default = () => <Chip>Label</Chip>;

export const LargeLabelChipIconLeft = () => (
	<Chip iconTrailing={Person}>Label</Chip>
);

export const LargeLabelChipIconRight = () => (
	<Chip iconLeading={Person}>Label</Chip>
);

export const LargeLabelChipIconRightClickable = () => (
	<Chip iconLeading={CrossSmall} onClickIconRight={(e) => {}}>
		Label
	</Chip>
);

export const LargeLabelChipIconLeftAndRightClickable = () => (
	<Chip
		iconTrailing={Person}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const LargeLabelChipDisabled = () => (
	<Chip iconLeading={CrossSmall} onClickIconRight={(e) => {}} disabled>
		Label
	</Chip>
);

export const DefaultSmall = () => <Chip size={Sizes.SMALL}>Label</Chip>;

export const SmallLabelChipIconLeft = () => (
	<Chip iconTrailing={Person} size={Sizes.SMALL}>
		Label
	</Chip>
);

export const SmallLabelChipIconRight = () => (
	<Chip iconLeading={Person} size={Sizes.SMALL}>
		Label
	</Chip>
);

export const SmallLabelChipIconRightClickable = () => (
	<Chip
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallLabelChipIconLeftAndRightClickable = () => (
	<Chip
		iconTrailing={Person}
		iconLeading={CrossSmall}
		size={Sizes.SMALL}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const SmallLabelChipDisabled = () => (
	<Chip
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		disabled
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

// AVATAR

// Large
export const DefaultLargeAvatar = () => (
	<Chip chipType={ChipType.AVATAR}>Label</Chip>
);

export const LargeAvatarChipIconLeft = () => (
	<Chip chipType={ChipType.AVATAR} iconTrailing={AccountCircle}>
		Label
	</Chip>
);

export const LargeAvatarChipIconRight = () => (
	<Chip chipType={ChipType.AVATAR} iconLeading={AccountCircle}>
		Label
	</Chip>
);

export const LargeAvatarChipIconRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const LargeAvatarChipIconLeftAndRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircle}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const LargeAvatarChipDisabled = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		disabled
	>
		Label
	</Chip>
);

// Small
export const DefaultSmallAvatar = () => (
	<Chip chipType={ChipType.AVATAR} size={Sizes.SMALL}>
		Label
	</Chip>
);

export const SmallAvatarChipIconLeft = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircle}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipIconRight = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={AccountCircle}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipIconRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipIconLeftAndRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircle}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipDisabled = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		disabled
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);
