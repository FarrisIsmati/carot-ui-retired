import { CurveType } from "@/types/VisionForm/locationSection";
import { Point } from "recharts/types/shape/Curve";

// Define an array of control points
export const noCurve: Point[] = [
	{ x: 0, y: 100 },
	{ x: 100, y: 100 },
];

export const basicCurve: Point[] = [
	{ x: 0, y: 50 },
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
	{ x: 100, y: 100 },
];

export const linearCurve: Point[] = [
	{ x: 0, y: 0 },
	{ x: 100, y: 100 },
];

export const rapidCurve: Point[] = [
	{ x: 0, y: 25 },
	{ x: 5, y: 200 },
	{ x: 10, y: 150 },
	{ x: 15, y: 150 },
	{ x: 20, y: 175 },
	{ x: 25, y: 180 },
	{ x: 100, y: 200 },
];

export const steadyCurve: Point[] = [
	{ x: 0, y: 50 },
	{ x: 5, y: 60 },
	{ x: 10, y: 75 },
	{ x: 15, y: 70 },
	{ x: 20, y: 65 },
	{ x: 25, y: 60 },
	{ x: 30, y: 75 },
	{ x: 35, y: 80 },
	{ x: 40, y: 75 },
	{ x: 45, y: 85 },
	{ x: 50, y: 90 },
	{ x: 55, y: 80 },
	{ x: 60, y: 80 },
	{ x: 65, y: 75 },
	{ x: 70, y: 80 },
	{ x: 75, y: 90 },
	{ x: 80, y: 95 },
	{ x: 85, y: 99 },
	{ x: 90, y: 92 },
	{ x: 95, y: 100 },
	{ x: 100, y: 100 },
];

export const consistentCurve: Point[] = [
	{ x: 0, y: 80 },
	{ x: 5, y: 85 },
	{ x: 10, y: 80 },
	{ x: 15, y: 87 },
	{ x: 20, y: 83 },
	{ x: 25, y: 88 },
	{ x: 30, y: 84 },
	{ x: 35, y: 90 },
	{ x: 40, y: 80 },
	{ x: 45, y: 85 },
	{ x: 50, y: 90 },
	{ x: 55, y: 82 },
	{ x: 60, y: 86 },
	{ x: 65, y: 78 },
	{ x: 70, y: 82 },
	{ x: 75, y: 88 },
	{ x: 80, y: 90 },
	{ x: 85, y: 95 },
	{ x: 90, y: 92 },
	{ x: 95, y: 95 },
	{ x: 100, y: 95 },
];

export const curveTypeToPointsMapper = {
	[CurveType.NONE]: noCurve,
	[CurveType.BASIC]: basicCurve,
	[CurveType.LINEAR]: linearCurve,
	[CurveType.RAPID]: rapidCurve,
	[CurveType.STEADY]: steadyCurve,
	[CurveType.CONSISTENT]: consistentCurve,
};
