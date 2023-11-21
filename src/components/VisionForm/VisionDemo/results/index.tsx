import useCalendar from "./hooks/useCalendar";

export default () => {
	// Generates initial calendar, then updates it based on form values
	const calendar = useCalendar();

	console.log(calendar);
	console.log("-");

	return <p>Le results</p>;
};
