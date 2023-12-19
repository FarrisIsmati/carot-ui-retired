import { ChipButtonControlState } from "@/components/common/ChipButtonControl";
import { ChartFilterEnum } from "@/types/Charts/Filter";

export const getChartFilterData = (
	filterState: ChipButtonControlState<ChartFilterEnum>
): ChartFilterEnum => {
	const res = Object.entries(filterState).find(([_, isActive]) => {
		if (isActive) {
			return true;
		}
	});
	return (res && (res[0] as ChartFilterEnum)) ?? ChartFilterEnum.Month;
};
