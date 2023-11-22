import useCalendar from "./hooks/useCalendar";

export default () => {
	// Generates initial calendar, then updates it based on form values
	const calendar = useCalendar();

	console.log(calendar);

	return <p>Le results</p>;
};
