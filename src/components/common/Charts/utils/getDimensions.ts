import { Margin } from "@/types/Charts";

/**
 * Returns the correct dimensions of the SVG if a margin is going to be used
 */
const getDimensions = ({
	margin: userMargin,
	width: actualWidth,
	height: actualHeight,
}: {
	margin?: Margin;
	width: number;
	height: number;
}) => {
	const margin = userMargin
		? userMargin
		: { top: 0, right: 0, bottom: 20, left: 0 };
	const width = actualWidth - margin.left - margin.right;
	const height = actualHeight - margin.top - margin.bottom;

	return {
		margin,
		width,
		height,
	};
};

export default getDimensions;
