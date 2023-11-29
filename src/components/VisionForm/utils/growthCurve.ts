import { CurveDataPoint } from "@/types/VisionForm/common/growthCurve";
import { CurveType } from "@/types/VisionForm/locationSection";
import { curveTypeToPointsMapper } from "../VisionDemo/values/fields/growthValues";

interface Point {
	x: number;
	y: number;
}

/**
 * Function based on De Casteljau's algorithm for cubic Bézier curves
 * @param points: Point
 * @param t: number
 * @returns
 */
const calculateBezierCurve = (points: Point[], t: number): Point => {
	if (points.length < 2) {
		throw new Error("At least two points are required.");
	}

	if (points.length === 2) {
		// Linear interpolation between two points
		const p0 = points[0];
		const p1 = points[1];
		return {
			x: p0.x + (p1.x - p0.x) * t,
			y: p0.y + (p1.y - p0.y) * t,
		};
	}

	// Recursive de Casteljau's algorithm for cubic Bézier curve
	const newPoints = [];
	for (let i = 0; i < points.length - 1; i++) {
		const p0 = points[i];
		const p1 = points[i + 1];
		newPoints.push({
			x: p0.x + (p1.x - p0.x) * t,
			y: p0.y + (p1.y - p0.y) * t,
		});
	}

	return calculateBezierCurve(newPoints, t);
};

/**
 * Takes an array of points, and a length of days
 * @param points Point[]
 * @param length number
 * @returns
 */
export const calculateGrowthCurve = (
	points: Point[],
	length: number
): CurveDataPoint[] => {
	const dataArr = [];

	// Calculate points on the Bézier curve
	for (let t = 0; t <= 1; t += 1 / length) {
		const point = calculateBezierCurve(points, t);
		dataArr.push({ uv: point.y });
	}

	return dataArr;
};

/**
 * Return results of growth curve
 */
export const createGrowthCurve = (
	curveType: CurveType | undefined,
	length: number | undefined
): CurveDataPoint[] => {
	if (!curveType || !length) {
		return [];
	}
	const curvePoints = curveTypeToPointsMapper[curveType];
	return calculateGrowthCurve(curvePoints, length);
};
