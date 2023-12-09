import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { styled } from "styled-components";

export const StyledReactCalendar = styled(Calendar)`
	pointer-events: all;
`;

export default ({ onChange, value }: CalendarProps) => {
	return <StyledReactCalendar onChange={onChange} value={value} />;
};
