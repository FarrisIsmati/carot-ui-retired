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

export const WithLabel = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} />
	</DatePickerContainer>
);

export const Disabled = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} disabled />
	</DatePickerContainer>
);

export const WithError = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} error />
	</DatePickerContainer>
);

export const WithErrorText = () => (
	<DatePickerContainer>
		<DatePicker placeholder={"Start date"} errorText="Invalid date" />
	</DatePickerContainer>
);
