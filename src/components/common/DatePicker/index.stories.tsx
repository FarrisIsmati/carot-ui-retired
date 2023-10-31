import { styled } from "styled-components";
import DatePicker from ".";
import { DateFormatEnum } from "./types";

export default {
	component: DatePicker,
	title: "Date picker",
	tags: ["autodocs"],
};

const DatePickerContainer = styled.div`
	height: 600px;
`;

export const Default = () => (
	<DatePickerContainer>
		<DatePicker />
	</DatePickerContainer>
);

export const DefaultValue = () => (
	<DatePickerContainer>
		<DatePicker defaultValue={new Date()} />
	</DatePickerContainer>
);

export const AlternateFormatting = () => (
	<DatePickerContainer>
		<DatePicker
			defaultValue={new Date()}
			dateFormat={DateFormatEnum.DDMMYYYY}
		/>
	</DatePickerContainer>
);

export const withLabel = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} />
	</DatePickerContainer>
);

export const disabled = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} disabled />
	</DatePickerContainer>
);

export const withError = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} error />
	</DatePickerContainer>
);

export const withErrorText = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} errorText="Invalid date" />
	</DatePickerContainer>
);
