import { CurveType } from "@/types/VisionForm/LocationSection";
import { Point } from "recharts/types/shape/Curve";

// Define an array of control points
export const basicCurve: Point[] = [
	{ x: 0, y: 0 },
	{ x: 5, y: 90 },
	{ x: 10, y: 105 },
	{ x: 15, y: 15 },
	{ x: 20, y: 30 },
	{ x: 25, y: 40 },
	{ x: 30, y: 45 },
	{ x: 35, y: 55 },
	{ x: 40, y: 60 },
	{ x: 45, y: 50 },
	{ x: 50, y: 70 },
	{ x: 55, y: 75 },
	{ x: 60, y: 70 },
	{ x: 65, y: 85 },
	{ x: 70, y: 70 },
	{ x: 75, y: 80 },
	{ x: 80, y: 85 },
	{ x: 85, y: 86 },
	{ x: 90, y: 88 },
	{ x: 95, y: 90 },
	{ x: 100, y: 88 },
];

export const curveTypeToPointsMapper = {
	[CurveType.BASIC]: basicCurve,
	[CurveType.RAPID]: basicCurve,
};
