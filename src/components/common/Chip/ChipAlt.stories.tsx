import { Sizes } from "@/styles/sizes";
import AccountCircle from "../Icons/AccountCircle";
import CrossSmall from "../Icons/CrossSmall";
import Person from "../Icons/Person";

import { ChipType } from ".";

import ChipAlt from "./ChipAlt";
export default {
	component: ChipAlt,
	title: "Chip Alt",
	tags: ["autodocs"],
};

// Large
export const Default = () => <ChipAlt>Label</ChipAlt>;

export const LargeLabelChipIconLeft = () => (
	<ChipAlt iconTrailing={Person}>Label</ChipAlt>
);

export const LargeLabelChipIconRight = () => (
	<ChipAlt iconLeading={Person}>Label</ChipAlt>
);

export const LargeLabelChipIconRightClickable = () => (
	<ChipAlt iconLeading={CrossSmall} onClickIconRight={(e) => {}}>
		Label
	</ChipAlt>
);

export const LargeLabelChipIconLeftAndRightClickable = () => (
	<ChipAlt
		iconTrailing={Person}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const LargeLabelChipDisabled = () => (
	<ChipAlt iconLeading={CrossSmall} onClickIconRight={(e) => {}} disabled>
		Label
	</ChipAlt>
);

export const DefaultSmall = () => <ChipAlt size={Sizes.SMALL}>Label</ChipAlt>;

export const SmallLabelChipIconLeft = () => (
	<ChipAlt iconTrailing={Person} size={Sizes.SMALL}>
		Label
	</ChipAlt>
);

export const SmallLabelChipIconRight = () => (
	<ChipAlt iconLeading={Person} size={Sizes.SMALL}>
		Label
	</ChipAlt>
);

export const SmallLabelChipIconRightClickable = () => (
	<ChipAlt
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallLabelChipIconLeftAndRightClickable = () => (
	<ChipAlt
		iconTrailing={Person}
		iconLeading={CrossSmall}
		size={Sizes.SMALL}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const SmallLabelChipDisabled = () => (
	<ChipAlt
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		disabled
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

// AVATAR

// Large
export const DefaultLargeAvatar = () => (
	<ChipAlt chipType={ChipType.AVATAR}>Label</ChipAlt>
);

export const LargeAvatarChipIconLeft = () => (
	<ChipAlt chipType={ChipType.AVATAR} iconTrailing={AccountCircle}>
		Label
	</ChipAlt>
);

export const LargeAvatarChipIconRight = () => (
	<ChipAlt chipType={ChipType.AVATAR} iconLeading={AccountCircle}>
		Label
	</ChipAlt>
);

export const LargeAvatarChipIconRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const LargeAvatarChipIconLeftAndRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircle}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const LargeAvatarChipDisabled = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		disabled
	>
		Label
	</ChipAlt>
);

// Small
export const DefaultSmallAvatar = () => (
	<ChipAlt chipType={ChipType.AVATAR} size={Sizes.SMALL}>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconLeft = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircle}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconRight = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={AccountCircle}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconLeftAndRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircle}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipDisabled = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={CrossSmall}
		onClickIconRight={(e) => {}}
		disabled
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);
