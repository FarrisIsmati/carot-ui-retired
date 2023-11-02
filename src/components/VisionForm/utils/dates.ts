import moment from "moment";

/**
 * Get length between two dates
 */
export const datesDifference = (
	startDate: string | undefined,
	endDate: string | undefined
) => {
	if (!startDate || !endDate) {
		return 0;
	}

	return moment(endDate).diff(startDate, "days");
};
