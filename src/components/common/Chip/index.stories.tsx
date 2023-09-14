import { Sizes } from "@/styles/sizes";
import {
	AccountCircleOutlined,
	Close,
	PersonOutlineOutlined,
} from "@material-ui/icons";
import Chip, { ChipType } from ".";

export default {
	component: Chip,
	title: "Chip",
	tags: ["autodocs"],
};

// Large
export const Default = () => <Chip>Label</Chip>;

export const LargeLabelChipIconLeft = () => (
	<Chip iconTrailing={PersonOutlineOutlined}>Label</Chip>
);

export const LargeLabelChipIconRight = () => (
	<Chip iconLeading={PersonOutlineOutlined}>Label</Chip>
);

export const LargeLabelChipIconRightClickable = () => (
	<Chip iconLeading={Close} onClickIconRight={(e) => {}}>
		Label
	</Chip>
);

export const LargeLabelChipIconLeftAndRightClickable = () => (
	<Chip
		iconTrailing={PersonOutlineOutlined}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const LargeLabelChipDisabled = () => (
	<Chip iconLeading={Close} onClickIconRight={(e) => {}} disabled>
		Label
	</Chip>
);

export const DefaultSmall = () => <Chip size={Sizes.SMALL}>Label</Chip>;

export const SmallLabelChipIconLeft = () => (
	<Chip iconTrailing={PersonOutlineOutlined} size={Sizes.SMALL}>
		Label
	</Chip>
);

export const SmallLabelChipIconRight = () => (
	<Chip iconLeading={PersonOutlineOutlined} size={Sizes.SMALL}>
		Label
	</Chip>
);

export const SmallLabelChipIconRightClickable = () => (
	<Chip iconLeading={Close} onClickIconRight={(e) => {}} size={Sizes.SMALL}>
		Label
	</Chip>
);

export const SmallLabelChipIconLeftAndRightClickable = () => (
	<Chip
		iconTrailing={PersonOutlineOutlined}
		iconLeading={Close}
		size={Sizes.SMALL}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const SmallLabelChipDisabled = () => (
	<Chip
		iconLeading={Close}
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
	<Chip chipType={ChipType.AVATAR} iconTrailing={AccountCircleOutlined}>
		Label
	</Chip>
);

export const LargeAvatarChipIconRight = () => (
	<Chip chipType={ChipType.AVATAR} iconLeading={AccountCircleOutlined}>
		Label
	</Chip>
);

export const LargeAvatarChipIconRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const LargeAvatarChipIconLeftAndRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircleOutlined}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
	>
		Label
	</Chip>
);

export const LargeAvatarChipDisabled = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={Close}
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
		iconTrailing={AccountCircleOutlined}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipIconRight = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={AccountCircleOutlined}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipIconRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipIconLeftAndRightClickable = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconTrailing={AccountCircleOutlined}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);

export const SmallAvatarChipDisabled = () => (
	<Chip
		chipType={ChipType.AVATAR}
		iconLeading={Close}
		onClickIconRight={(e) => {}}
		disabled
		size={Sizes.SMALL}
	>
		Label
	</Chip>
);
