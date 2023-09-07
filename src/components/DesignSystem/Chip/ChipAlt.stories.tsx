import { Sizes } from "@/styles/sizes";
import {
	AccountCircleOutlined,
	Close,
	PersonOutlineOutlined,
} from "@material-ui/icons";
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
	<ChipAlt iconTrailing={PersonOutlineOutlined}>Label</ChipAlt>
);

export const LargeLabelChipIconRight = () => (
	<ChipAlt iconLeading={PersonOutlineOutlined}>Label</ChipAlt>
);

export const LargeLabelChipIconRightClickable = () => (
	<ChipAlt iconLeading={Close} onClickIconRight={(e) => {}}>
		Label
	</ChipAlt>
);

export const LargeLabelChipIconLeftAndRightClickable = () => (
	<ChipAlt
		iconTrailing={PersonOutlineOutlined}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const LargeLabelChipDisabled = () => (
	<ChipAlt iconLeading={Close} onClickIconRight={(e) => {}} disabled>
		Label
	</ChipAlt>
);

export const DefaultSmall = () => <ChipAlt size={Sizes.SMALL}>Label</ChipAlt>;

export const SmallLabelChipIconLeft = () => (
	<ChipAlt iconTrailing={PersonOutlineOutlined} size={Sizes.SMALL}>
		Label
	</ChipAlt>
);

export const SmallLabelChipIconRight = () => (
	<ChipAlt iconLeading={PersonOutlineOutlined} size={Sizes.SMALL}>
		Label
	</ChipAlt>
);

export const SmallLabelChipIconRightClickable = () => (
	<ChipAlt iconLeading={Close} onClickIconRight={(e) => {}} size={Sizes.SMALL}>
		Label
	</ChipAlt>
);

export const SmallLabelChipIconLeftAndRightClickable = () => (
	<ChipAlt
		iconTrailing={PersonOutlineOutlined}
		iconLeading={Close}
		size={Sizes.SMALL}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const SmallLabelChipDisabled = () => (
	<ChipAlt
		iconLeading={Close}
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
	<ChipAlt chipType={ChipType.AVATAR} iconTrailing={AccountCircleOutlined}>
		Label
	</ChipAlt>
);

export const LargeAvatarChipIconRight = () => (
	<ChipAlt chipType={ChipType.AVATAR} iconLeading={AccountCircleOutlined}>
		Label
	</ChipAlt>
);

export const LargeAvatarChipIconRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const LargeAvatarChipIconLeftAndRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircleOutlined}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
	>
		Label
	</ChipAlt>
);

export const LargeAvatarChipDisabled = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={Close}
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
		iconTrailing={AccountCircleOutlined}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconRight = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={AccountCircleOutlined}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipIconLeftAndRightClickable = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircleOutlined}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);

export const SmallAvatarChipDisabled = () => (
	<ChipAlt
		chipType={ChipType.AVATAR}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
		disabled
		size={Sizes.SMALL}
	>
		Label
	</ChipAlt>
);
