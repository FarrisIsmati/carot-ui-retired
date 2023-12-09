import { Margin } from "@/types/Charts";
import * as d3 from "d3";
import { RefObject } from "react";

export default ({
	ref,
	width,
	height,
	margin,
}: {
	ref: RefObject<SVGElement>;
	width: number;
	height: number;
	margin: Margin;
}) => {
	const x = d3.scaleTime().range([0, width]);
	const y = d3.scaleLinear().range([height, 0]);

	// append the svg object to the body of the page
	const svg = d3
		.select(ref.current)
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", `translate(${margin.left},${margin.top})`);

	return {
		svg,
		x,
		y,
	};
};
